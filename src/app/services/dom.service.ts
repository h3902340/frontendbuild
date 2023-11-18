import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DOMService {

  constructor(@Inject(DOCUMENT) private _doc: Document) { }

  getDocument(): Document {
    return this._doc;
  }

  getWindow(): Window {
    return this._doc.defaultView!;
  }

  getLocation(): Location {
    return this._doc.location;
  }

  createElement(tag: string): HTMLElement {
    return this._doc.createElement(tag);
  }
}