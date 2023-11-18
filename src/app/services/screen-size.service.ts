import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private screenWidthSubject: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);
  public screenWidth$: Observable<number> = this.screenWidthSubject.asObservable();

  constructor() {
    window.addEventListener('resize', () => {
      this.screenWidthSubject.next(window.innerWidth);
    });
  }
}