import { CdkDragEnd, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';
import { backend } from '../../proto/compiled';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { isvisible, sleep } from 'src/app/utility';
import { idCivToFlagRectangle, ladderCivs } from 'src/app/constant';
import { DOMService } from 'src/app/services/dom.service';

/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: 'tier-list',
  templateUrl: 'tier-list.component.html',
  styleUrls: ['tier-list.component.css'],
})
export class TierListComponent implements OnInit, AfterViewInit {
  public readonly cardHeight: number = 70;
  public save: string;

  public sliderTheme: ThemePalette = 'accent';
  public tierRowCount: number = 4;
  public hideWatermark: boolean = true;

  public civArray: number[];
  public sTierArray: number[];
  public aTierArray: number[];
  public bTierArray: number[];
  public cTierArray: number[];
  public dTierArray: number[];
  public eTierArray: number[];
  public fTierArray: number[];

  private civArrayTemp: number[];
  private sTierArrayTemp: number[];
  private aTierArrayTemp: number[];
  private bTierArrayTemp: number[];
  private cTierArrayTemp: number[];
  private dTierArrayTemp: number[];
  private eTierArrayTemp: number[];
  private fTierArrayTemp: number[];

  private civFlags: HTMLElement[];
  private sTierFlags: HTMLElement[] = [];
  private aTierFlags: HTMLElement[] = [];
  private bTierFlags: HTMLElement[] = [];
  private cTierFlags: HTMLElement[] = [];
  private dTierFlags: HTMLElement[] = [];
  private eTierFlags: HTMLElement[] = [];
  private fTierFlags: HTMLElement[] = [];

  private dropZoneArray: HTMLElement[];

  private tierListElement: HTMLElement;
  private watermark: HTMLElement;

  private currentSpot: { left: number, top: number, right: number, bottom: number };
  private currentFlag: HTMLElement;
  private currentZone: HTMLElement;
  private readonly localSavekey: string = 'tier-list-save';
  private document: Document;
  private location: Location;

  constructor(private route: ActivatedRoute, private captureService: NgxCaptureService, private domService: DOMService) { }

  public ngOnInit(): void {
    this.document = this.domService.getDocument();
    this.location = this.domService.getLocation();
    this.route.queryParams.subscribe(params => {
      this.save = params['q'];
      if (!this.save) {
        this.save = localStorage.getItem(this.localSavekey)!;
      }

      if (this.save) {
        try {
          var binaryString = atob(this.save);
          var bytes = new Uint8Array(binaryString.length);
          for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          let restore = backend.TierListSave.decode(bytes);

          this.sTierArray = restore.sTier.slice();
          this.sTierArrayTemp = restore.sTier.slice();
          this.aTierArray = restore.aTier.slice();
          this.aTierArrayTemp = restore.aTier.slice();
          this.bTierArray = restore.bTier.slice();
          this.bTierArrayTemp = restore.bTier.slice();
          this.cTierArray = restore.cTier.slice();
          this.cTierArrayTemp = restore.cTier.slice();
          this.dTierArray = restore.dTier.slice();
          this.dTierArrayTemp = restore.dTier.slice();
          this.eTierArray = restore.eTier.slice();
          this.eTierArrayTemp = restore.eTier.slice();
          this.fTierArray = restore.fTier.slice();
          this.fTierArrayTemp = restore.fTier.slice();
          this.civArray = restore.civList.slice();
          this.civArrayTemp = restore.civList.slice();

          this.tierRowCount = restore.tierCount;
        } catch (e) {
          console.error('error parsing save: ' + e);
          this.reset();
        }
      } else {
        this.reset();
      }
    });
  }

  public ngAfterViewInit(): void {
    this.dropZoneArray = [];
    let civListZone = this.document.getElementById('civ-list-zone')!;
    this.dropZoneArray.push(civListZone);
    let sTierZone = this.document.getElementById('s-tier-zone')!;
    this.dropZoneArray.push(sTierZone);
    let aTierZone = this.document.getElementById('a-tier-zone')!;
    this.dropZoneArray.push(aTierZone);
    let bTierZone = this.document.getElementById('b-tier-zone')!;
    this.dropZoneArray.push(bTierZone);
    let cTierZone = this.document.getElementById('c-tier-zone')!;
    this.dropZoneArray.push(cTierZone);
    let dTierZone = this.document.getElementById('d-tier-zone')!;
    this.dropZoneArray.push(dTierZone);
    let eTierZone = this.document.getElementById('e-tier-zone')!;
    this.dropZoneArray.push(eTierZone);
    let fTierZone = this.document.getElementById('f-tier-zone')!;
    this.dropZoneArray.push(fTierZone);

    this.tierListElement = this.document.getElementById('tier-list')!;
    this.watermark = this.document.getElementById('watermark')!;

    this.updateFlagArrays();
  }

  private updateFlagArrays(): void {
    let civFlagsOriginal = this.document.getElementsByName('civ-list');
    this.civFlags = [];
    for (let i = 0; i < civFlagsOriginal.length; i++) {
      this.civFlags.push(civFlagsOriginal.item(i));
    }

    let sTierFlagsOriginal = this.document.getElementsByName('s-tier');
    this.sTierFlags = [];
    for (let i = 0; i < sTierFlagsOriginal.length; i++) {
      this.sTierFlags.push(sTierFlagsOriginal.item(i));
    }

    let aTierFlagsOriginal = this.document.getElementsByName('a-tier');
    this.aTierFlags = [];
    for (let i = 0; i < aTierFlagsOriginal.length; i++) {
      this.aTierFlags.push(aTierFlagsOriginal.item(i));
    }

    let bTierFlagsOriginal = this.document.getElementsByName('b-tier');
    this.bTierFlags = [];
    for (let i = 0; i < bTierFlagsOriginal.length; i++) {
      this.bTierFlags.push(bTierFlagsOriginal.item(i));
    }

    let cTierFlagsOriginal = this.document.getElementsByName('c-tier');
    this.cTierFlags = [];
    for (let i = 0; i < cTierFlagsOriginal.length; i++) {
      this.cTierFlags.push(cTierFlagsOriginal.item(i));
    }

    let dTierFlagsOriginal = this.document.getElementsByName('d-tier');
    this.dTierFlags = [];
    for (let i = 0; i < dTierFlagsOriginal.length; i++) {
      this.dTierFlags.push(dTierFlagsOriginal.item(i));
    }

    let eTierFlagsOriginal = this.document.getElementsByName('e-tier');
    this.eTierFlags = [];
    for (let i = 0; i < eTierFlagsOriginal.length; i++) {
      this.eTierFlags.push(eTierFlagsOriginal.item(i));
    }

    let fTierFlagsOriginal = this.document.getElementsByName('f-tier');
    this.fTierFlags = [];
    for (let i = 0; i < fTierFlagsOriginal.length; i++) {
      this.fTierFlags.push(fTierFlagsOriginal.item(i));
    }
  }

  private isOverlapped(rect1: DOMRect, rect2: DOMRect): boolean {
    return !(rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom)
  }

  private areaCovered(rect1: DOMRect, rect2: DOMRect): number {
    if (!this.isOverlapped(rect1, rect2)) return 0;
    return (Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left)) *
      (Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));
  }

  /**
   *  Check if center of rect1 is covered by rect2
   */
  private isCenterCovered(rect1: { left: number, top: number, right: number, bottom: number }, rect2: { left: number, top: number, right: number, bottom: number }): boolean {
    let rect1CenterX = (rect1.left + rect1.right) * .5;
    let rect1CenterY = (rect1.top + rect1.bottom) * .5;
    return rect1CenterX > rect2.left && rect1CenterX < rect2.right && rect1CenterY > rect2.top && rect1CenterY < rect2.bottom;
  }

  public dragStart(event: CdkDragStart): void {
    this.updateFlagArrays();
    this.currentFlag = event.source.element.nativeElement;
    this.currentZone = this.currentFlag.parentElement!;
    this.currentSpot = this.currentFlag.getBoundingClientRect();
    this.currentFlag.style.zIndex = '9999';
  }

  public dragMove(event: CdkDragMove): void {
    let largestCoveredArea = 0;
    let finalZone: HTMLElement = this.currentFlag.parentElement!;
    let selfRect = this.currentFlag.getBoundingClientRect();
    for (let k = 0; k < this.dropZoneArray.length; k++) {
      let zoneRect = this.dropZoneArray[k].getBoundingClientRect();
      let coveredArea = this.areaCovered(zoneRect, selfRect);
      if (coveredArea > largestCoveredArea) {
        largestCoveredArea = coveredArea;
        finalZone = this.dropZoneArray[k];
      }
    }

    if (finalZone == this.currentZone) {
      let flagStringArrayTemp = this.getFlagNumberArrayTemp(finalZone.id);
      let flagArray = this.getFlagArray(finalZone.id);
      for (let i = 0; i < flagArray.length; i++) {
        let flagName = this.currentFlag.getAttribute('src');
        if (flagName == flagArray[i].getAttribute('src')) continue;
        let flagRect = flagArray[i].getBoundingClientRect();
        if (this.isCenterCovered(flagRect, selfRect)) {
          this.currentSpot = flagRect;
          let oldIndex = -1;
          for (let j = 0; j < flagArray.length; j++) {
            if (flagArray[j].getAttribute('src') == flagName) {
              oldIndex = j;
              break;
            }
          }
          let rowImageCount: number = Math.floor(finalZone.getBoundingClientRect().width / selfRect.width);
          if (oldIndex < i) {
            for (let j = oldIndex + 1; j <= i; j++) {
              let styleLeft = flagArray[j].style.left;
              let left = Number(styleLeft.substring(0, styleLeft.length - 2));
              let styleTop = flagArray[j].style.top;
              let top = Number(styleTop.substring(0, styleTop.length - 2));
              if (j % rowImageCount == 0) {
                flagArray[j].style.left = ((rowImageCount - 1) * selfRect.width + left) + 'px';
                flagArray[j].style.top = (-selfRect.height + top) + 'px';
              } else {
                flagArray[j].style.left = (-selfRect.width + left) + 'px';
                flagArray[j].style.top = (top) + 'px';
              }
            }
          } else {
            for (let j = i; j < oldIndex; j++) {
              let styleLeft = flagArray[j].style.left;
              let left = Number(styleLeft.substring(0, styleLeft.length - 2));
              let styleTop = flagArray[j].style.top;
              let top = Number(styleTop.substring(0, styleTop.length - 2));
              if ((j + 1) % rowImageCount == 0) {
                flagArray[j].style.left = (-(rowImageCount - 1) * selfRect.width + left) + 'px';
                flagArray[j].style.top = (selfRect.height + top) + 'px';
              } else {
                flagArray[j].style.left = (selfRect.width + left) + 'px';
                flagArray[j].style.top = (top) + 'px';
              }
            }
          }

          flagArray.splice(oldIndex, 1);
          flagArray.splice(i, 0, this.currentFlag);

          let flagString = flagStringArrayTemp.splice(oldIndex, 1);
          flagStringArrayTemp.splice(i, 0, flagString[0]);
          break;
        }
      }

      let isCoverAnyRect: boolean = false;
      for (let i = 0; i < flagArray.length; i++) {
        if (flagArray[i].getAttribute('src') == this.currentFlag.getAttribute('src')) continue;
        if (this.areaCovered(flagArray[i].getBoundingClientRect(), selfRect) > 0) {
          isCoverAnyRect = true;
          break;
        }
      }

      if (!isCoverAnyRect && !this.isCenterCovered(this.currentSpot, selfRect)) {
        this.currentSpot = flagArray[flagArray.length - 1].getBoundingClientRect();
        let flagName = this.currentFlag.getAttribute('src');
        let oldIndex = -1;
        for (let j = 0; j < flagArray.length; j++) {
          if (flagArray[j].getAttribute('src') == flagName) {
            oldIndex = j;
            break;
          }
        }
        let rowImageCount: number = Math.floor(finalZone.getBoundingClientRect().width / selfRect.width);
        for (let j = oldIndex + 1; j < flagArray.length; j++) {
          let styleLeft = flagArray[j].style.left;
          let left = Number(styleLeft.substring(0, styleLeft.length - 2));
          let styleTop = flagArray[j].style.top;
          let top = Number(styleTop.substring(0, styleTop.length - 2));
          if (j % rowImageCount == 0) {
            flagArray[j].style.left = ((rowImageCount - 1) * selfRect.width + left) + 'px';
            flagArray[j].style.top = (-selfRect.height + top) + 'px';
          } else {
            flagArray[j].style.left = (-selfRect.width + left) + 'px';
            flagArray[j].style.top = (top) + 'px';
          }
        }

        flagArray.splice(oldIndex, 1);
        flagArray.push(this.currentFlag);

        let flagString = flagStringArrayTemp.splice(oldIndex, 1);
        flagStringArrayTemp.push(flagString[0]);
      }
    } else {
      let finalFlagStringArrayTemp = this.getFlagNumberArrayTemp(finalZone.id);
      let currentFlagStringArrayTemp = this.getFlagNumberArrayTemp(this.currentZone.id);
      let finalFlagArray = this.getFlagArray(finalZone.id);
      let currentFlagArray = this.getFlagArray(this.currentZone.id);
      let flagName = this.currentFlag.getAttribute('src');
      let index = -1;
      for (let i = 0; i < currentFlagArray.length; i++) {
        if (currentFlagArray[i].getAttribute('src') == flagName) {
          index = i;
          break;
        }
      }
      let flag = currentFlagArray.splice(index, 1);
      let flagString = currentFlagStringArrayTemp.splice(index, 1);
      // find where to insert
      let insertIndex = finalFlagArray.length;
      let finalZoneRect = finalZone.getBoundingClientRect();
      let insertSpot = {
        left: finalZoneRect.left,
        top: finalZoneRect.top,
        right: finalZoneRect.left + selfRect.width,
        bottom: finalZoneRect.top + selfRect.height
      };
      for (let i = 0; i < finalFlagArray.length; i++) {
        let finalFlagRect = finalFlagArray[i].getBoundingClientRect();
        if (this.isCenterCovered(finalFlagRect, selfRect)) {
          insertIndex = i;
          insertSpot = finalFlagRect;
          break;
        }
      }
      finalFlagArray.splice(insertIndex, 0, flag[0]);
      finalFlagStringArrayTemp.splice(insertIndex, 0, flagString[0]);

      // move the flags in previous zone
      for (let i = index; i < currentFlagArray.length; i++) {
        let flagRect = currentFlagArray[i].getBoundingClientRect();
        let styleLeft = currentFlagArray[i].style.left;
        let left = Number(styleLeft.substring(0, styleLeft.length - 2));
        let styleTop = currentFlagArray[i].style.top;
        let top = Number(styleTop.substring(0, styleTop.length - 2));
        currentFlagArray[i].style.left = (this.currentSpot.left - flagRect.left + left) + 'px';
        currentFlagArray[i].style.top = (this.currentSpot.top - flagRect.top + top) + 'px';
        this.currentSpot = flagRect;
      }

      this.currentSpot = insertSpot;
      this.currentZone = finalZone;

      // move the flags in next zone
      // figure out how many images on each row
      let rowImageCount: number = Math.floor(finalZone.getBoundingClientRect().width / selfRect.width);
      for (let i = insertIndex + 1; i < finalFlagArray.length; i++) {
        let styleLeft = finalFlagArray[i].style.left;
        let left = Number(styleLeft.substring(0, styleLeft.length - 2));
        let styleTop = finalFlagArray[i].style.top;
        let top = Number(styleTop.substring(0, styleTop.length - 2));
        if (i % rowImageCount == 0) {
          finalFlagArray[i].style.left = (-(rowImageCount - 1) * selfRect.width + left) + 'px';
          finalFlagArray[i].style.top = (selfRect.height + top) + 'px';
        } else {
          finalFlagArray[i].style.left = (selfRect.width + left) + 'px';
          finalFlagArray[i].style.top = (top) + 'px';
        }
      }
    }
  }

  private getFlagNumberArrayTemp(parentId: string): number[] {
    switch (parentId) {
      case 'civ-list-zone':
        return this.civArrayTemp;
      case 's-tier-zone':
        return this.sTierArrayTemp;
      case 'a-tier-zone':
        return this.aTierArrayTemp;
      case 'b-tier-zone':
        return this.bTierArrayTemp;
      case 'c-tier-zone':
        return this.cTierArrayTemp;
      case 'd-tier-zone':
        return this.dTierArrayTemp;
      case 'e-tier-zone':
        return this.eTierArrayTemp;
      case 'f-tier-zone':
        return this.fTierArrayTemp;
      default:
        return [];
    }
  }

  private getFlagArray(parentId: string): HTMLElement[] {
    switch (parentId) {
      case 'civ-list-zone':
        return this.civFlags;
      case 's-tier-zone':
        return this.sTierFlags;
      case 'a-tier-zone':
        return this.aTierFlags;
      case 'b-tier-zone':
        return this.bTierFlags;
      case 'c-tier-zone':
        return this.cTierFlags;
      case 'd-tier-zone':
        return this.dTierFlags;
      case 'e-tier-zone':
        return this.eTierFlags;
      case 'f-tier-zone':
        return this.fTierFlags;
      default:
        return [];
    }
  }

  public dragEnd(event: CdkDragEnd): void {
    this.civArray = [];
    for (let i = 0; i < this.civArrayTemp.length; i++) {
      this.civArray.push(this.civArrayTemp[i]);
    }
    this.sTierArray = [];
    for (let i = 0; i < this.sTierArrayTemp.length; i++) {
      this.sTierArray.push(this.sTierArrayTemp[i]);
    }
    this.aTierArray = [];
    for (let i = 0; i < this.aTierArrayTemp.length; i++) {
      this.aTierArray.push(this.aTierArrayTemp[i]);
    }
    this.bTierArray = [];
    for (let i = 0; i < this.bTierArrayTemp.length; i++) {
      this.bTierArray.push(this.bTierArrayTemp[i]);
    }
    this.cTierArray = [];
    for (let i = 0; i < this.cTierArrayTemp.length; i++) {
      this.cTierArray.push(this.cTierArrayTemp[i]);
    }
    this.dTierArray = [];
    for (let i = 0; i < this.dTierArrayTemp.length; i++) {
      this.dTierArray.push(this.dTierArrayTemp[i]);
    }
    this.eTierArray = [];
    for (let i = 0; i < this.eTierArrayTemp.length; i++) {
      this.eTierArray.push(this.eTierArrayTemp[i]);
    }
    this.fTierArray = [];
    for (let i = 0; i < this.fTierArrayTemp.length; i++) {
      this.fTierArray.push(this.fTierArrayTemp[i]);
    }

    for (let i = 0; i < this.civFlags.length; i++) {
      this.civFlags[i].style.left = '0px';
      this.civFlags[i].style.top = '0px';
    }
    for (let i = 0; i < this.sTierFlags.length; i++) {
      this.sTierFlags[i].style.left = '0px';
      this.sTierFlags[i].style.top = '0px';
    }
    for (let i = 0; i < this.aTierFlags.length; i++) {
      this.aTierFlags[i].style.left = '0px';
      this.aTierFlags[i].style.top = '0px';
    }
    for (let i = 0; i < this.bTierFlags.length; i++) {
      this.bTierFlags[i].style.left = '0px';
      this.bTierFlags[i].style.top = '0px';
    }
    for (let i = 0; i < this.cTierFlags.length; i++) {
      this.cTierFlags[i].style.left = '0px';
      this.cTierFlags[i].style.top = '0px';
    }
    for (let i = 0; i < this.dTierFlags.length; i++) {
      this.dTierFlags[i].style.left = '0px';
      this.dTierFlags[i].style.top = '0px';
    }
    for (let i = 0; i < this.eTierFlags.length; i++) {
      this.eTierFlags[i].style.left = '0px';
      this.eTierFlags[i].style.top = '0px';
    }
    for (let i = 0; i < this.fTierFlags.length; i++) {
      this.fTierFlags[i].style.left = '0px';
      this.fTierFlags[i].style.top = '0px';
    }

    this.currentFlag.style.zIndex = '0';
    event.source.reset();
    localStorage.setItem(this.localSavekey, this.getSaveString());
  }

  public downloadScreenshot(): void {
    this.captureAsync();
  }

  private async captureAsync(): Promise<void> {
    this.hideWatermark = false;
    while (!isvisible(this.watermark)) {
      await sleep(100);
    }
    let rect = this.tierListElement.getBoundingClientRect();
    this.captureService.getImage(this.tierListElement, false, {
      x: 0, y: 0, width: rect.width - 1, height: rect.height
    })
      .pipe(
        tap((img) => {
          this.captureService.downloadImage(img);
        })
      ).subscribe();
    this.hideWatermark = true;
  }

  public copySharedLink(): string {
    return `${this.location.origin}/tierlist?q=${this.getSaveString()}`;
  }

  private getSaveString(): string {
    let save: backend.TierListSave = backend.TierListSave.create({
      sTier: this.sTierArray,
      aTier: this.aTierArray,
      bTier: this.bTierArray,
      cTier: this.cTierArray,
      dTier: this.dTierArray,
      eTier: this.eTierArray,
      fTier: this.fTierArray,
      civList: this.civArray,
      tierCount: this.tierRowCount
    });

    return btoa(String.fromCharCode(...backend.TierListSave.encode(save).finish()));
  }

  public civIdToNameRectangle(civId: number): string {
    return idCivToFlagRectangle(civId);
  }

  public onSliderChanged(event: Event): void {
    if (this.tierRowCount < 7) {
      for (let i = 0; i < this.fTierArrayTemp.length; i++) {
        this.civArrayTemp.push(this.fTierArrayTemp[i]);
      }
      this.fTierArrayTemp = [];
      this.fTierArray = [];
    }
    if (this.tierRowCount < 6) {
      for (let i = 0; i < this.eTierArrayTemp.length; i++) {
        this.civArrayTemp.push(this.eTierArrayTemp[i]);
      }
      this.eTierArrayTemp = [];
      this.eTierArray = [];
    }
    if (this.tierRowCount < 5) {
      for (let i = 0; i < this.dTierArrayTemp.length; i++) {
        this.civArrayTemp.push(this.dTierArrayTemp[i]);
      }
      this.dTierArrayTemp = [];
      this.dTierArray = [];
    }
    if (this.tierRowCount < 4) {
      for (let i = 0; i < this.cTierArrayTemp.length; i++) {
        this.civArrayTemp.push(this.cTierArrayTemp[i]);
      }
      this.cTierArrayTemp = [];
      this.cTierArray = [];
    }
    if (this.tierRowCount < 3) {
      for (let i = 0; i < this.bTierArrayTemp.length; i++) {
        this.civArrayTemp.push(this.bTierArrayTemp[i]);
      }
      this.bTierArrayTemp = [];
      this.bTierArray = [];
    }
    if (this.tierRowCount < 2) {
      for (let i = 0; i < this.aTierArrayTemp.length; i++) {
        this.civArrayTemp.push(this.aTierArrayTemp[i]);
      }
      this.aTierArrayTemp = [];
      this.aTierArray = [];
    }
    if (this.tierRowCount < 1) {
      for (let i = 0; i < this.sTierArrayTemp.length; i++) {
        this.civArrayTemp.push(this.sTierArrayTemp[i]);
      }
      this.sTierArrayTemp = [];
      this.sTierArray = [];
    }
    this.civArray = this.civArrayTemp.slice();
  }

  public reset(): void {
    this.sTierArray = [];
    this.sTierArrayTemp = [];
    this.aTierArray = [];
    this.aTierArrayTemp = [];
    this.bTierArray = [];
    this.bTierArrayTemp = [];
    this.cTierArray = [];
    this.cTierArrayTemp = [];
    this.dTierArray = [];
    this.dTierArrayTemp = [];
    this.eTierArray = [];
    this.eTierArrayTemp = [];
    this.fTierArray = [];
    this.fTierArrayTemp = [];
    this.civArray = [];
    this.civArrayTemp = [];
    for (let i = 0; i < ladderCivs.length; i++) {
      let civId: number = ladderCivs[i];
      if (civId == 49) continue;
      this.civArray.push(civId);
      this.civArrayTemp.push(civId);
    }
    localStorage.removeItem(this.localSavekey);
  }
}