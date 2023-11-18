import { Component, OnInit } from '@angular/core';
import { foodIconSrc, goldIconSrc, influenceIconSrc, resourcesRoot, shipmentIconSrc, woodIconSrc } from 'src/app/constant';
import { JsonService } from 'src/app/services/json.service';
import { StrTableService } from 'src/app/services/string-table.service';
import { MapInfo, MapResources } from 'src/app/types/maps';
import { Language, getBrowserLanguage, importMapInfos, importMapResources } from 'src/app/utility';

enum MapType {
  Competitive = 90501,
  Standard = 33470,
  All = 19836,
  Asian = 66519,
  American = 90612,
  African = 105033,
  TeamGame = 90606,
  Land = 90608,
  Water = 90610,
  Hybrid = 106210,
  Treaty = 91837,
  Historical = 105998,
  European = 105996,
  Special = 106208,
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public mapArray: { info: MapInfo, name: string }[];
  private mapResources: MapResources[];
  public detailText: string;
  public huntCount: string;
  public woodCount: string;
  public mineCount: string;
  public fishCount: string;
  public whaleCount: string;
  public currentMapName: string;
  public currentMapPath: string;
  private currentMapInfo: MapInfo;
  public currentMapWidth: number;
  public currentMapLength: number;
  public currrentMapArea: number;
  public currentMapAreaEquation: string;
  private currentSearchString: string;
  public languages: Language[] = [
    Language.English,
    Language.French,
    Language.German,
    Language.Hindi,
    Language.Italian,
    Language.Japanese,
    Language.Korean,
    Language.Malay,
    Language.PortugueseBrazil,
    Language.Russian,
    Language.SimplifiedChinese,
    Language.Spanish,
    Language.TraditionalChinese,
    Language.Turkish,
    Language.Vietnamese
  ];
  public languageDisplayNames: string[] = [
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
  ];
  public languageText: string;
  private sizeString: string;
  public selectedLanguage: Language;
  public currentMapType: MapType = MapType.Standard;
  public mapTypes: number[] = [
    MapType.African,
    MapType.Competitive,
    MapType.All,
    MapType.American,
    MapType.Asian,
    MapType.European,
    MapType.Historical,
    MapType.Hybrid,
    MapType.Land,
    MapType.Special,
    MapType.Standard,
    MapType.TeamGame,
    MapType.Treaty,
    MapType.Water,
  ];
  public mapTypeNames: string[] = [
    '', '', '', '', '', '', '', '', '', '', '', '', '', ''
  ];
  private maps: { [k: string]: MapInfo };
  public hideSpinner: boolean;
  public foodIcon: string;
  public woodIcon: string;
  public goldIcon: string;
  public influenceIcon: string;
  public shipmentIcon: string;
  public mapTitle: string = "Maps";
  public searchbarPlaceholder: string;
  public mapTypeText: string;
  public progress: number;

  constructor(private stringTableService: StrTableService, private jsonService: JsonService) { };
  public async ngOnInit() {
    this.foodIcon = foodIconSrc;
    this.woodIcon = woodIconSrc;
    this.goldIcon = goldIconSrc;
    this.influenceIcon = influenceIconSrc;
    this.shipmentIcon = shipmentIconSrc;
    this.hideSpinner = false;
    if (!this.selectedLanguage) {
      this.selectedLanguage = getBrowserLanguage();
    }
    this.maps = await importMapInfos(this.jsonService);
    this.mapResources = await importMapResources(this.jsonService);
    await this.updateLanguage();
    this.hideSpinner = true;
  }

  private async updateLanguage() {
    this.stringTableService.setLanguage(this.selectedLanguage);
    let titleStrings = await this.stringTableService.getLocalizedStrings([
      30078, 19813, 19815, 70880, 71223
    ]);
    // this.mapTitle = titleStrings[30078];
    this.searchbarPlaceholder = titleStrings[19813];
    this.mapTypeText = titleStrings[19815].replace(':', '');
    this.languageText = titleStrings[70880];
    this.sizeString = titleStrings[71223];

    let mapTypeNamesMap = await this.stringTableService.getLocalizedStrings(this.mapTypes);
    for (let i = 0; i < this.mapTypes.length; i++) {
      this.mapTypeNames[i] = mapTypeNamesMap[this.mapTypes[i]];
    }
    let languageIdStrings: number[] = [
      70882, 70883, 70884, 70885, 70886, 70887, 70888, 70889, 70890, 70891, 70892, 70893, 70894, 70895, 70896,
    ];
    let languageDisplayNamesMap = await this.stringTableService.getLocalizedStrings(languageIdStrings);
    for (let i = 0; i < languageIdStrings.length; i++) {
      this.languageDisplayNames[i] = languageDisplayNamesMap[languageIdStrings[i]];
    }
    await this.updateMapGrid();
    if (this.currentMapInfo) {
      this.onMapClick(this.currentMapInfo);
    }
  }

  private async updateMapGrid() {
    this.mapArray = [];
    let mapValues = Object.values(this.maps);
    this.hideSpinner = false;
    this.progress = 0;
    let promises: Promise<string>[] = [];
    mapValues = mapValues.filter(value => {
      if (value.isLarge) return false;
      let mapResources = this.findMapResourcesFromMapInfo(value);
      if (!mapResources) {
        console.error(value.idStr);
        return false;
      }
      switch (Number(this.currentMapType)) {
        case MapType.Competitive:
          if (!mapResources.isCompetitive) {
            return false;
          }
          break;
        case MapType.Standard:
          if (!mapResources.isStandard) {
            return false;
          }
          break;
        case MapType.All:
          break;
        case MapType.Asian:
          if (!mapResources.isAsian) {
            return false;
          }
          break;
        case MapType.American:
          if (!mapResources.isAmerican) {
            return false;
          }
          break;
        case MapType.African:
          if (!mapResources.isAfrican) {
            return false;
          }
          break;
        case MapType.TeamGame:
          if (!mapResources.isTeamGame) {
            return false;
          }
          break;
        case MapType.Land:
          if (!mapResources.isLand) {
            return false;
          }
          break;
        case MapType.Water:
          if (!mapResources.isWater) {
            return false;
          }
          break;
        case MapType.Hybrid:
          if (!mapResources.isHybrid) {
            return false;
          }
          break;
        case MapType.Treaty:
          if (!mapResources.isTreaty) {
            return false;
          }
          break;
        case MapType.Historical:
          if (!mapResources.isHistorical) {
            return false;
          }
          break;
        case MapType.European:
          if (!mapResources.isEuropean) {
            return false;
          }
          break;
        case MapType.Special:
          if (!mapResources.isSpecial) {
            return false;
          }
          break;
      }
      return true;
    })
    let progressStep: number = 100 / mapValues.length;
    for (let i = 0; i < mapValues.length; i++) {
      let promise = this.getMapName(mapValues[i]);
      promise.then((mapName) => {
        this.progress += progressStep;
        if (this.currentSearchString && this.currentSearchString != '') {
          if (!mapName.toLowerCase().includes(this.currentSearchString.toLowerCase())) {
            return;
          }
        }
        this.mapArray.push({
          info: mapValues[i],
          name: mapName,
        });
      });
      promises.push(promise);
    }
    await Promise.all(promises);
    this.hideSpinner = true;
  }

  public getMapPath(mapInfo: MapInfo): string {
    return `${resourcesRoot}${mapInfo.imagepath}.png`;
  }

  private async getMapName(mapInfo: MapInfo): Promise<string> {
    return this.stringTableService.getLocalizedString(mapInfo.displayNameID);
  }

  public async onMapClick(mapInfo: MapInfo) {
    this.detailText = (await this.stringTableService.getLocalizedString(mapInfo.details)).replaceAll('\\n', '<br>');
    let mapResources = this.findMapResourcesFromMapInfo(mapInfo)!;
    let hunt: any = mapResources['Food in Hunts in Thousands'];
    let wood: any = mapResources['Wood in Thousands'];
    let mine: any = mapResources['Coin in Mines in Thousands'];
    let fish: any = mapResources['Food in Fish in Thousands'];
    let whale: any = mapResources['Number of Whales'];
    this.huntCount = this.getResourceString(hunt);
    this.woodCount = this.getResourceString(wood);
    this.mineCount = this.getResourceString(mine);
    this.fishCount = this.getResourceString(fish);
    this.whaleCount = this.getResourceString(whale, 1);
    this.currentMapWidth = mapResources['Map Width (m)'];
    this.currentMapLength = mapResources['Map Length - if stretched (m)']!;
    this.currrentMapArea = mapResources['Map Area (m^2)'];
    this.currentMapName = await this.getMapName(mapInfo);
    this.currentMapPath = this.getMapPath(mapInfo);
    this.currentMapAreaEquation;
    if (this.currrentMapArea) {
      if (this.currentMapLength) {
        this.currentMapAreaEquation = `${this.sizeString}: ${this.currentMapWidth} × ${this.currentMapLength} = ${this.currrentMapArea} (m²)`
      } else {
        this.currentMapAreaEquation = `${this.sizeString}: ${this.currentMapWidth}² × π ÷ 4 = ${this.currrentMapArea.toFixed()} (m²)`
      }
    } else {
      this.currentMapAreaEquation = '';
    }
    this.currentMapInfo = mapInfo;
  }

  private getResourceString(res: any, multiplier: number = 1000): string {
    if (!res) return '';
    let resCount: string = '';
    if (typeof res === 'string' || res instanceof String) {
      if (res == 'variable') {
        resCount = 'Random'
      } else if (res.includes('-')) {
        let splits: string[] = res.split('-');
        let lowerBound: number = Number(splits[0]) * multiplier;
        let upperBound: number = Number(splits[1]) * multiplier;
        resCount = lowerBound + '~' + upperBound;
      }
    } else {
      let resNumber: number = Number(res);
      resCount = (resNumber * multiplier).toFixed();
    }
    return resCount;
  }

  public onSelectLanguage() {
    this.updateLanguage();
  }

  public onSelectMapType() {
    this.updateMapGrid();
  }

  private findMapResourcesFromMapInfo(mapInfo: MapInfo): MapResources | null {
    for (let i = 0; i < this.mapResources.length; i++) {
      if (this.mapResources[i]['File Name'].toLowerCase() != mapInfo.idStr) continue;
      return this.mapResources[i];
    }
    return null;
  }

  public onSearchChanged(searchValue: string): void {
    this.currentSearchString = searchValue;
    this.updateMapGrid();
  }
}
