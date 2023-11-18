import { Injectable } from '@angular/core';
import { baseUrl } from '../baseUrl';

export interface SseResponse {
  label: string,
  date: number,
  data: any
}

@Injectable({
  providedIn: 'root'
})
export class SseService {
  private api: string = '/api/create_connection_sse';
  private evetSource: EventSource;
  
  public createConnection(): EventSource {
    if (this.evetSource) return this.evetSource;
    this.evetSource = new EventSource(`${baseUrl}${this.api}`);
    return this.evetSource;
  }
}
