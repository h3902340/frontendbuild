import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../baseUrl';

@Injectable({
  providedIn: 'root'
})
export class EditablePageService {

  constructor(private http: HttpClient) { }

  savePage(title: string, editors: any[]) {
    const payload = {
      title: title,
      editors: editors
    };
    return this.http.post(`${baseUrl}/savePage`, payload);
  }
}
