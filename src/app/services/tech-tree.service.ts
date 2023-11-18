import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../baseUrl';
import { backend } from '../proto/compiled';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { NgxIndexedDBService, ObjectStoreMeta } from 'ngx-indexed-db';

type techDB = {
    name: string,
    string: string,
}

const objectStoresMeta: ObjectStoreMeta = {
    store: 'tech_tree',
    storeConfig: { keyPath: 'name', autoIncrement: false },
    storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: true } },
        { name: 'data', keypath: 'data', options: { unique: false } },
    ]
};

@Injectable({
    providedIn: 'root'
})
export class TechTreeService {
    private api = "/api/techtree";
    private cache: { [k: string]: backend.ITechInfo } = {};
    constructor(private httpClient: HttpClient, private dbService: NgxIndexedDBService) { }

    public async getTech(techName: string): Promise<backend.ITechInfo> {
        if (this.cache[techName]) {
            return this.cache[techName];
        }
        let techDB = await firstValueFrom(this.dbService.getByID<techDB>('tech_tree', techName));
        if (techDB) {
            var binaryString = atob(techDB.string);
            var bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return backend.TechInfo.decode(bytes);
        }
        let httpParams: HttpParams = new HttpParams()
            .set('techNames', techName)
        let arryBuffer = await lastValueFrom(this.httpClient.get(`${baseUrl}${this.api}`, {
            params: httpParams,
            responseType: 'arraybuffer'
        }));
        let list = backend.TechInfoList.decode(new Uint8Array(arryBuffer));
        if (list.techInfoList.length == 0) {
            console.error('tech not found! techName: ' + techName);
            return {};
        }
        let saveString = btoa(String.fromCharCode(...backend.TechInfo.encode(list.techInfoList[0]).finish()));
        await firstValueFrom(this.dbService.update<techDB>('tech_tree', { name: techName, string: saveString }));
        this.cache[techName] = list.techInfoList[0];
        return list.techInfoList[0];
    }

    public async getTechs(techNames: string[]): Promise<backend.ITechInfo[]> {
        let techs: backend.ITechInfo[] = [];
        for (let i = techNames.length - 1; i >= 0; i--) {
            let techDB = await firstValueFrom(this.dbService.getByID<techDB>('tech_tree', techNames[i]));
            if (techDB) {
                var binaryString = atob(techDB.string);
                var bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }
                techs.push(backend.TechInfo.decode(bytes));
                techNames.splice(i, 1);
            }
        }
        if (techNames.length > 0) {
            let httpParams: HttpParams = new HttpParams()
                .set('techNames', techNames.toString())
            let arryBuffer = await lastValueFrom(this.httpClient.get(`${baseUrl}${this.api}`, {
                params: httpParams,
                responseType: 'arraybuffer'
            }));
            let response = backend.TechInfoList.decode(new Uint8Array(arryBuffer));
            for (let tech of response.techInfoList) {
                let saveString = btoa(String.fromCharCode(...backend.TechInfo.encode(tech).finish()));
                await firstValueFrom(this.dbService.update<techDB>('tech_tree', { name: tech.name!, string: saveString }));
                techs.push(tech);
            }
        }
        return techs;
    }
}
