import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseUrl';
import { YoutubeVideo } from '../components/home-page/home-youtube-list/home-youtube-list.component';

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {

    constructor(private httpClient: HttpClient) { }

    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    private topApi: string = "/api/youtubelist";
    private customApi: string = "/api/youtubelist_custom";

    getTopVideoList(): Observable<YoutubeVideo[]> {
        const options = {
            headers: this.headers,
        };
        return this.httpClient.get<YoutubeVideo[]>(baseUrl + this.topApi, options);
    }

    getCustomVideoList(idList: String[]): Observable<YoutubeVideo[]> {
        let httpParams: HttpParams = new HttpParams()
            .set('idList', idList.toString())
        const options = {
            headers: this.headers,
            params: httpParams
        };
        return this.httpClient.get<YoutubeVideo[]>(baseUrl + this.customApi, options);
    }
}


