import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../baseUrl';
import { Observable } from 'rxjs';

export interface EditorContents {
  overview: string;
  bonus: string;
  notes: string;
  buildOrders: { [id: string]: string };
  decks: { [id: string]: string };
  matchups: { [civId: string]: string };
  [key: string]: any;
}
export interface guideBuild {
  id: number;
  civ: number;
  title: string;
}
@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private apiUrl = baseUrl + '/api/';

  constructor(private httpClient: HttpClient) { }

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  saveEditorContent(civId: number, key: string, editorContent: any) {
    return this.httpClient.post(this.apiUrl + 'saveEditor', { civId, key, editorContent });
  }

  saveYoutubeContent(civId: number, youtubes: string) {
    console.log(civId + '   ' + youtubes )
    return this.httpClient.post(this.apiUrl + 'saveYoutube', { civId, youtubes });
  }

  loadEditorContent(civId: number): Observable<EditorContents> {
    let httpParams: HttpParams = new HttpParams()
      .set('civId', civId);
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<EditorContents>(this.apiUrl + 'loadEditors', options);
  }
  loadYoutube(civId: number): Observable<string> {
    let httpParams: HttpParams = new HttpParams()
      .set('civId', civId);
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<string>(this.apiUrl + 'getYoutube', options);
  }
  createguidebuild(civId: number, title: string): Observable<guideBuild> {
    const payload = {
      civ: civId,
      title: title
    };
    return this.httpClient.post<guideBuild>(this.apiUrl + 'createguidebuild', payload);
  }

  public getGuidebuild(civId: number): Observable<guideBuild[]> {
    let httpParams: HttpParams = new HttpParams()
      .set('civ', civId);
    const options = {
      headers: this.headers,
      params: httpParams
    };
    return this.httpClient.get<guideBuild[]>(this.apiUrl + 'getguidebuild', options);
  }
  public deleteGuideBuild(id: number) {
    let httpParams: HttpParams = new HttpParams()
      .set('id', id);
    const options = {
      headers: this.headers,
      params: httpParams
    };
    console.log('delete')
    this.httpClient.delete(this.apiUrl + 'deleteguidebuild', options)
      .subscribe(response => {
        console.log('Response:', response);
      }, error => {
        console.error('Error:', error);
      });
  }

}
