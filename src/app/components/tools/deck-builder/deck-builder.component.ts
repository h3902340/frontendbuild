import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { firstValueFrom, lastValueFrom, tap } from 'rxjs';
import { NgxCaptureService } from 'ngx-capture';
import { Card, Language, civToName, getBrowserLanguage, getCardFromTech, getRandomInt, importCivs, importHomeCity, importProtoTable, isNeedToShowEffect, languageToName, sleep, techMap } from 'src/app/utility';
import { backend } from '../../../proto/compiled';
import { ActivatedRoute } from '@angular/router';
import { Civ, age1IconSrc, age2IconSrc, age3IconSrc, age4IconSrc, age5IconSrc, idCivToFlagLeft, ladderCivs, supportedLanguages } from 'src/app/constant';
import { AgeUpOptionComponent } from '../age-up-option/age-up-option.component';
import { HomecityRoot } from '../../../types/homecityamericans';
import { StrTableService } from 'src/app/services/string-table.service';
import { TechTreeService } from 'src/app/services/tech-tree.service';

export enum DeckRadioType {
  ByAge,
  ByType,
  AgeUp,
  Search,
}

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeckBuilderComponent implements OnInit, AfterViewInit {
  public readonly cardHeight: number = 70;
  public ageUpCardArray: Card[] = [];
  public ageUpRadioLabel: string;
  public age1CardArray: Card[];
  public age2CardArray: Card[];
  public age3CardArray: Card[];
  public age4CardArray: Card[];
  public age1Pool: Card[];
  public age2Pool: Card[];
  public age3Pool: Card[];
  public age4Pool: Card[];
  public get allCardPool(): Card[] {
    let cards: Card[] = [];
    if (this.age1Pool) {
      cards = cards.concat(this.age1Pool);
    }
    if (this.age2Pool) {
      cards = cards.concat(this.age2Pool);
    }
    if (this.age3Pool) {
      cards = cards.concat(this.age3Pool);
    }
    if (this.age4Pool) {
      cards = cards.concat(this.age4Pool);
    }
    return cards;
  }
  public build1Pool: Card[];
  public build2Pool: Card[];
  public build3Pool: Card[];
  public build4Pool: Card[];
  public build5Pool: Card[];
  public build1Name: string;
  public build2Name: string;
  public build3Name: string;
  public build4Name: string;
  public build5Name: string;
  public selectedCardCount: number = 0;
  public maxCardCount: number = 0;
  public selectedLanguage: Language;
  public selectedCivId: Civ = Civ.Spanish;
  public hasAgeUpCards: boolean;
  public languages: Language[] = supportedLanguages;
  public languageNames: string[] = supportedLanguages;
  public civs: number[];
  public civNames: string[];

  public readonly cardPadding: number = 5;
  private readonly cardLimitEachAge: number = 10;
  private deck: HTMLElement;
  private saveKey: string = 'deck-save';
  private save: string;
  private currentAgeTab: number;
  private currentTypeTab: number;
  private currentAgeUpTab: number;
  public hideSpinner: boolean = false;
  public radioType: DeckRadioType;
  @ViewChild('ageUpOption2')
  public ageUpOption2: AgeUpOptionComponent;
  @ViewChild('ageUpOption3')
  public ageUpOption3: AgeUpOptionComponent;
  @ViewChild('ageUpOption4')
  public ageUpOption4: AgeUpOptionComponent;
  @ViewChild('ageUpOption5')
  public ageUpOption5: AgeUpOptionComponent;
  private age2OptionSaved: number;
  private age3OptionSaved: number;
  private age4OptionSaved: number;
  private age5OptionSaved: number;
  public hasFederalCards: boolean;
  public search: string = "";
  public age1Src: string = age1IconSrc;
  public age2Src: string = age2IconSrc;
  public age3Src: string = age3IconSrc;
  public age4Src: string = age4IconSrc;
  public age5Src: string = age5IconSrc;

  public deckName: string = '';
  private homeCity: HomecityRoot;
  public searchBarPlaceholder: string;
  public deckBuilderTitle: string;
  public deckNamePlaceholder: string;
  public resetText: string;
  public screenshotText: string;
  public copSharedLinkText: string;
  public randomText: string;
  public languageText: string;
  public civText: string;
  public sizeText: string;
  public byAgeText: string;
  public byTypeText: string;

  public age1Text: string;
  public age2Text: string;
  public age3Text: string;
  public age4Text: string;
  public age5Text: string;

  public progress: number;

  constructor(private stringTableService: StrTableService, private techTreeService: TechTreeService, private route: ActivatedRoute, private jsonService: JsonService, private captureService: NgxCaptureService) { }

  public async ngOnInit() {
    this.progress = 0;
    this.hideSpinner = false;
    this.civs = [];
    this.currentAgeTab = 0;
    this.currentTypeTab = 0;
    this.currentAgeUpTab = 0;
    this.radioType = DeckRadioType.ByAge;
    this.civs = [];
    let params = await firstValueFrom(this.route.queryParams);
    this.save = params['q'];
    if (!this.save) {
      this.save = localStorage.getItem(this.saveKey)!;
    }
    this.age1CardArray = [];
    this.age2CardArray = [];
    this.age3CardArray = [];
    this.age4CardArray = [];
    let restore: backend.DeckSave | null = null;
    if (this.save) {
      try {
        var binaryString = atob(this.save);
        var bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        restore = backend.DeckSave.decode(bytes);
        if (ladderCivs.includes(restore.idCiv)) {
          this.selectedCivId = restore.idCiv;
        }
        for (let i = 0; i < this.languages.length; i++) {
          if (this.languages[i] == restore.selectedLanguage) {
            this.selectedLanguage = restore.selectedLanguage;
          }
        }
        this.currentAgeTab = restore.byAgeTab;
        this.currentTypeTab = restore.byTypeTab;
        this.currentAgeUpTab = restore.ageUpTab;
        this.radioType = restore.radioType;
        this.age2OptionSaved = restore.age2Option;
        this.age3OptionSaved = restore.age3Option;
        this.age4OptionSaved = restore.age4Option;
        this.age5OptionSaved = restore.age5Option;
        this.search = restore.search;
        this.deckName = restore.deckName;
      } catch (e) {
        console.error(e);
      }
    }
    if (!this.selectedLanguage) {
      this.selectedLanguage = getBrowserLanguage();
    }
    this.stringTableService.setLanguage(this.selectedLanguage);
    let ageTexts = await this.stringTableService.getLocalizedStrings([
      36129, 36130, 36131, 36132, 36134
    ])
    this.age1Text = ageTexts[36129];
    this.age2Text = ageTexts[36130];
    this.age3Text = ageTexts[36131];
    this.age4Text = ageTexts[36132];
    this.age5Text = ageTexts[36134];
    this.civNames = [];
    for (let i = 0; i < ladderCivs.length; i++) {
      this.civs.push(ladderCivs[i]);
      this.civNames.push(await civToName(this.stringTableService, ladderCivs[i]));
    }
    this.languageNames = [];
    for (let i = 0; i < this.languages.length; i++) {
      this.languageNames.push(await languageToName(this.stringTableService, this.languages[i]));
    }
    this.hasAgeUpCards = this.selectedCivId == Civ.Mexicans || this.selectedCivId == Civ.UnitedStates;
    this.age1Pool = [];
    this.age2Pool = [];
    this.age3Pool = [];
    this.age4Pool = [];
    this.build1Pool = [];
    this.build2Pool = [];
    this.build3Pool = [];
    this.build4Pool = [];
    this.build5Pool = [];
    this.maxCardCount = 0;
    this.selectedCardCount = 0;
    await importCivs(this.jsonService);
    await importProtoTable(this.jsonService);
    this.homeCity = await importHomeCity(this.selectedCivId, this.jsonService);

    let build1IdString = Number(this.homeCity.homecity.building[1].displaynamestringid);
    let build2IdString = Number(this.homeCity.homecity.building[2].displaynamestringid);
    let build3IdString = Number(this.homeCity.homecity.building[3].displaynamestringid);
    let build4IdString = Number(this.homeCity.homecity.building[4].displaynamestringid);
    let build5IdString = Number(this.homeCity.homecity.building[5].displaynamestringid);
    let idStrings: number[] = [
      70846, 19813, 38236, 18480, 18442, 25345, 19269, 70880, 18682, 71223, 46335, 72587, 110265,
      build1IdString,
      build2IdString,
      build3IdString,
      build4IdString,
      build5IdString,
    ];
    let map = await this.stringTableService.getLocalizedStrings(idStrings);
    this.deckBuilderTitle = map[70846];
    this.searchBarPlaceholder = map[19813];
    this.deckNamePlaceholder = map[38236];
    this.resetText = map[18480];
    this.screenshotText = map[18442];
    this.copSharedLinkText = map[25345];
    this.randomText = map[19269];
    this.languageText = map[70880];
    this.civText = map[18682];
    this.sizeText = map[71223];
    this.byAgeText = map[46335];
    this.byTypeText = map[72587];
    this.ageUpRadioLabel = map[110265].replace(':', '');
    this.build1Name = map[build1IdString];
    this.build2Name = map[build2IdString];
    this.build3Name = map[build3IdString];
    this.build4Name = map[build4IdString];
    this.build5Name = map[build5IdString];

    this.maxCardCount = Number(this.homeCity.homecity.maxcardsperdeck);
    if (!this.maxCardCount) {
      this.maxCardCount = 25;
    }

    let activeCardSet = new Set<string>();
    for (let i = 0; i < this.homeCity.homecity.building.length; i++) {
      let building = this.homeCity.homecity.building[i];
      let activetechsObject = Object(building.activetechs);
      if (activetechsObject.tech) {
        let techs: any[] = activetechsObject.tech;
        for (let j = 0; j < techs.length; j++) {
          let text: string = techs[j]['#text'];
          if (!text) {
            text = techs[j];
          }
          if (text == 'HCXPBattleFieldConstructionIroquois') {
            activeCardSet.add('HCXPBattlefieldConstructionIroquois');
          } else if (text.startsWith('HCXPShipDogSoldiers')) {
            activeCardSet.add(text.replace('HCXPShipDogSoldiers', 'HCXPShipDogsoldiers'));
          } else if (text.startsWith('HCXPWindrunner')) {
            activeCardSet.add(text.replace('HCXPWindrunner', 'HCXPWindRunner'));
          } else if (text.startsWith('HCXPTempleXipetotec')) {
            activeCardSet.add(text.replace('HCXPTempleXipetotec', 'HCXPTempleXipeTotec'));
          } else if (text.startsWith('HCXPSPanishAllies2')) {
            activeCardSet.add(text.replace('HCXPSPanishAllies2', 'HCXPSpanishAllies2'));
          } else if (text.startsWith('ypHCShipCastleWagons')) {
            activeCardSet.add(text.replace('ypHCShipCastleWagons', 'YPHCShipCastleWagons'));
          } else if (text.startsWith('YPHCjapanesesiege')) {
            activeCardSet.add(text.replace('YPHCjapanesesiege', 'YPHCJapaneseSiege'));
          } else if (text.startsWith('YPHCnaginatahitpoints')) {
            activeCardSet.add(text.replace('YPHCnaginatahitpoints', 'YPHCNaginataHitpoints'));
          } else if (text.startsWith('YPHCConsulateRelations')) {
            activeCardSet.add(text.replace('YPHCConsulateRelations', 'ypHCConsulateRelations'));
          } else if (text.startsWith('YPHCMercssohei')) {
            activeCardSet.add(text.replace('YPHCMercssohei', 'YPHCMercsSohei'));
          } else if (text.startsWith('YPHCCallToArms1')) {
            activeCardSet.add(text.replace('YPHCCallToArms1', 'YPHCCalltoArms1'));
          } else {
            activeCardSet.add(text);
          }
        }
      }
    }
    let cards = this.homeCity.homecity.cards.card.filter(cardInfo => {
      if (cardInfo.name == 'HCMercsHolyRoman' && this.selectedCivId == 17) {
        return false;
      }

      if (cardInfo.name == 'HCXPInfantryLosTeam') {
        cardInfo.name = 'HCXPInfantryLOSTeam';
      } else if (cardInfo.name.startsWith('HCXPShipDogSoldiers')) {
        cardInfo.name = cardInfo.name.replace('HCXPShipDogSoldiers', 'HCXPShipDogsoldiers')
      } else if (cardInfo.name.startsWith('HCXPWindrunner')) {
        cardInfo.name = cardInfo.name.replace('HCXPWindrunner', 'HCXPWindRunner')
      } else if (cardInfo.name.startsWith('HCXPTempleXipetotec')) {
        cardInfo.name = cardInfo.name.replace('HCXPTempleXipetotec', 'HCXPTempleXipeTotec')
      } else if (cardInfo.name.startsWith('HCXPSPanishAllies2')) {
        cardInfo.name = cardInfo.name.replace('HCXPSPanishAllies2', 'HCXPSpanishAllies2')
      } else if (cardInfo.name.startsWith('ypHCShipCastleWagons')) {
        cardInfo.name = cardInfo.name.replace('ypHCShipCastleWagons', 'YPHCShipCastleWagons')
      } else if (cardInfo.name.startsWith('YPHCjapanesesiege')) {
        cardInfo.name = cardInfo.name.replace('YPHCjapanesesiege', 'YPHCJapaneseSiege')
      } else if (cardInfo.name.startsWith('YPHCnaginatahitpoints')) {
        cardInfo.name = cardInfo.name.replace('YPHCnaginatahitpoints', 'YPHCNaginataHitpoints')
      } else if (cardInfo.name.startsWith('YPHCConsulateRelations')) {
        cardInfo.name = cardInfo.name.replace('YPHCConsulateRelations', 'ypHCConsulateRelations')
      } else if (cardInfo.name.startsWith('YPHCMercssohei')) {
        cardInfo.name = cardInfo.name.replace('YPHCMercssohei', 'YPHCMercsSohei')
      } else if (cardInfo.name.startsWith('YPHCCallToArms1')) {
        cardInfo.name = cardInfo.name.replace('YPHCCallToArms1', 'YPHCCalltoArms1')
      }

      return activeCardSet.has(cardInfo.name);
    });
    let techNames: string[] = [];
    let progressStep: number = 100 / (cards.length + 2);
    for (let i = 0; i < cards.length; i++) {
      techNames.push(cards[i].name);
    }
    let techs = await this.techTreeService.getTechs(techNames);
    this.progress += progressStep;
    let effectTechNames: string[] = [];
    for (let i = 0; i < techs.length; i++) {
      let tech = techs[i];
      techMap[tech.name!] = tech;
      for (let j = 0; j < tech.effects!.length; j++) {
        if (tech.effects![j].type == 'TechStatus' && !tech.name!.includes('BloodBrothers') && isNeedToShowEffect(tech.effects![j].text!)) {
          effectTechNames.push(tech.effects![j].text!);
        }
      }
    }
    let effectTechs = await this.techTreeService.getTechs(effectTechNames);
    this.progress += progressStep;
    for (let i = 0; i < effectTechs.length; i++) {
      techMap[effectTechs[i].name!] = effectTechs[i];
    }
    let start = Date.now();
    let promises: Promise<Card | null>[] = [];
    for (let i = 0; i < cards.length; i++) {
      let cardInfo = cards[i];
      let tech = techMap[cardInfo.name];
      let amount = Number(cardInfo.displayunitcount);
      let maxCount = Number(cardInfo.maxcount);
      let age: number = Number(cardInfo.age);
      let promise = getCardFromTech(this.stringTableService, this.techTreeService, tech, this.selectedCivId, this.jsonService, amount, maxCount, age);
      promise.then(card => {
        if (!card) return;
        switch (card.age) {
          case 1:
            this.age1Pool.push(card);
            card.index = this.age1Pool.length - 1;
            break;
          case 2:
            this.age2Pool.push(card);
            card.index = this.age2Pool.length - 1;
            break;
          case 3:
            this.age3Pool.push(card);
            card.index = this.age3Pool.length - 1;
            break;
          case 4:
            this.age4Pool.push(card);
            card.index = this.age4Pool.length - 1;
            break;
        }
        switch (card.buildingIndex) {
          case 1:
            this.build1Pool.push(card);
            break;
          case 2:
            this.build2Pool.push(card);
            break;
          case 3:
            this.build3Pool.push(card);
            break;
          case 4:
            this.build4Pool.push(card);
            break;
          case 5:
            this.build5Pool.push(card);
            break;
        }
        this.progress += progressStep;
      });
      promises.push(promise);
    }
    try {
      await Promise.all(promises);
    } catch (e) {
      console.error(e);
    }
    // sort the cards
    this.age1Pool.sort((a, b) => {
      return a.index - b.index;
    });
    this.age2Pool.sort((a, b) => {
      return a.index - b.index;
    });
    this.age3Pool.sort((a, b) => {
      return a.index - b.index;
    });
    this.age4Pool.sort((a, b) => {
      return a.index - b.index;
    });
    console.log('time: ' + (Date.now() - start));

    if (restore) {
      for (let i = 0; i < restore.age1Array.length; i++) {
        let card = this.age1Pool[restore.age1Array[i]];
        card.isSelected = true;
        this.age1CardArray.push(card);
      }
      for (let i = 0; i < restore.age2Array.length; i++) {
        let card = this.age2Pool[restore.age2Array[i]];
        card.isSelected = true;
        this.age2CardArray.push(card);
      }
      for (let i = 0; i < restore.age3Array.length; i++) {
        let card = this.age3Pool[restore.age3Array[i]];
        card.isSelected = true;
        this.age3CardArray.push(card);
      }
      for (let i = 0; i < restore.age4Array.length; i++) {
        let card = this.age4Pool[restore.age4Array[i]];
        card.isSelected = true;
        this.age4CardArray.push(card);
      }
    }
    this.selectedCardCount = this.age1CardArray.length + this.age2CardArray.length + this.age3CardArray.length + this.age4CardArray.length;
    this.hideSpinner = true;
  }

  public async ngAfterViewInit() {
    while (!this.ageUpOption2 || !this.ageUpOption3 || !this.ageUpOption4 || !this.ageUpOption5) {
      await sleep(100);
    }
    let ageName: string = '';
    switch (this.currentAgeTab) {
      case 0:
        ageName = 'I'
        break;
      case 1:
        ageName = 'II'
        break;
      case 2:
        ageName = 'III'
        break;
      case 3:
        ageName = 'IV'
        break;
    }
    document.getElementById(ageName)!.style.display = 'block';
    let tablinks = document.getElementsByClassName("tablinks");
    tablinks[this.currentAgeTab].classList.add("active");

    let buildName: string = 'build' + (this.currentTypeTab + 1);
    document.getElementById(buildName)!.style.display = 'block';
    let tablinks2 = document.getElementsByClassName("tablinks2");
    tablinks2[this.currentTypeTab].classList.add("active");
    switch (this.currentAgeUpTab) {
      case 0:
        this.ageUpOption2.hidden = false;
        break;
      case 1:
        this.ageUpOption3.hidden = false;
        break;
      case 2:
        this.ageUpOption4.hidden = false;
        break;
      case 3:
        this.ageUpOption5.hidden = false;
        break;
    }
    let tablinks3 = document.getElementsByClassName("tablinks3");
    tablinks3[this.currentAgeUpTab].classList.add("active");

    this.deck = document.getElementById('deck')!;

    await this.ageUpOption2.InitSelection(this.age2OptionSaved);
    await this.ageUpOption3.InitSelection(this.age3OptionSaved);
    await this.ageUpOption4.InitSelection(this.age4OptionSaved);
    await this.ageUpOption5.InitSelection(this.age5OptionSaved);
    this.ageUpCardArray = this.ageUpOption2.getSelectedCards().concat(
      this.ageUpOption3.getSelectedCards()
    ).concat(
      this.ageUpOption4.getSelectedCards()
    ).concat(
      this.ageUpOption5.getSelectedCards()
    );
    this.hasFederalCards = this.ageUpOption2.hasFederalCards();
    if (!this.hasFederalCards) {
      if (this.radioType == 2) {
        this.radioType = 0;
      }
    }
    this.onSelectFilter(this.radioType);
  }

  public getTooltipText(card: Card): string {
    return `<p class="first-line">${card.displayName}</p>
    ${card.rolloverText}`;
  }

  public selectAgeTab(evt: any, ageName: string) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
      if (tablinks[i] == evt.currentTarget) {
        this.currentAgeTab = i;
      }
    }
    document.getElementById(ageName)!.style.display = 'block';
    evt.currentTarget.classList.add("active");
    this.saveDeckToLocal();
  }

  public selectBuidlingTab(evt: any, buildingIndex: string) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
      if (tablinks[i] == evt.currentTarget) {
        this.currentTypeTab = i;
      }
    }
    document.getElementById(buildingIndex)!.style.display = 'block';
    evt.currentTarget.classList.add("active");
    this.saveDeckToLocal();
  }

  public selectAgeUpTab(evt: any) {
    var i, tablinks;
    this.ageUpOption2.hidden = true;
    this.ageUpOption3.hidden = true;
    this.ageUpOption4.hidden = true;
    this.ageUpOption5.hidden = true;
    tablinks = document.getElementsByClassName("tablinks3");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
      if (tablinks[i] == evt.currentTarget) {
        this.currentAgeUpTab = i;
      }
    }
    switch (this.currentAgeUpTab) {
      case 0:
        this.ageUpOption2.hidden = false;
        break;
      case 1:
        this.ageUpOption3.hidden = false;
        break;
      case 2:
        this.ageUpOption4.hidden = false;
        break;
      case 3:
        this.ageUpOption5.hidden = false;
        break;
    }
    evt.currentTarget.classList.add("active");
    this.saveDeckToLocal();
  }

  public onSelectLanguage(): void {
    this.saveDeckToLocal();
    this.reInit();
  }

  public onSelectCiv(): void {
    this.reset();
    this.saveDeckToLocal();
    this.reInit();
  }

  private async reInit() {
    await this.ngOnInit();
    await this.ngAfterViewInit();
  }

  public onSelectFilter(radioType: DeckRadioType): void {
    this.radioType = radioType;
    this.saveDeckToLocal();
  }

  public onClickAgeUpOption(): void {
    this.ageUpCardArray = this.ageUpOption2.getSelectedCards().concat(
      this.ageUpOption3.getSelectedCards()
    ).concat(
      this.ageUpOption4.getSelectedCards()
    ).concat(
      this.ageUpOption5.getSelectedCards()
    );
    this.saveDeckToLocal();
  }

  public onClickAgeUpCard(card: Card): void {
    for (let i = this.ageUpCardArray.length - 1; i >= 0; i--) {
      if (this.ageUpCardArray[i].age == card.age) {
        this.ageUpCardArray.splice(i, 1);
      }
    }
    switch (card.age) {
      case 3:
        this.ageUpOption2.InitSelection(-1);
        break;
      case 4:
        this.ageUpOption3.InitSelection(-1);
        break;
      case 5:
        this.ageUpOption4.InitSelection(-1);
        break;
      case 6:
        this.ageUpOption5.InitSelection(-1);
        break;
    }
    this.saveDeckToLocal();
  }

  public onClickCard(card: Card): void {
    if (card.age == 1) {
      if (card.isSelected) {
        this.age1CardArray.splice(this.age1CardArray.indexOf(card), 1);
        this.selectedCardCount--;
      } else {
        if (this.age1CardArray.length == this.cardLimitEachAge) return;
        if (this.selectedCardCount == this.maxCardCount) return;
        this.age1CardArray.push(card);
        for (let i = this.age1CardArray.length - 2; i >= 0; i--) {
          if (this.age1CardArray[i].index > card.index) {
            let temp = this.age1CardArray[i];
            this.age1CardArray[i] = card;
            this.age1CardArray[i + 1] = temp;
          }
        }
        this.selectedCardCount++;
      }
      card.isSelected = !card.isSelected;
    } else if (card.age == 2) {
      if (card.isSelected) {
        this.age2CardArray.splice(this.age2CardArray.indexOf(card), 1);
        this.selectedCardCount--;
      } else {
        if (this.age2CardArray.length == this.cardLimitEachAge) return;
        if (this.selectedCardCount == this.maxCardCount) return;
        this.age2CardArray.push(card);
        for (let i = this.age2CardArray.length - 2; i >= 0; i--) {
          if (this.age2CardArray[i].index > card.index) {
            let temp = this.age2CardArray[i];
            this.age2CardArray[i] = card;
            this.age2CardArray[i + 1] = temp;
          }
        }
        this.selectedCardCount++;
      }
      card.isSelected = !card.isSelected;
    } else if (card.age == 3) {
      if (card.isSelected) {
        this.age3CardArray.splice(this.age3CardArray.indexOf(card), 1);
        this.selectedCardCount--;
      } else {
        if (this.age3CardArray.length == this.cardLimitEachAge) return;
        if (this.selectedCardCount == this.maxCardCount) return;
        this.age3CardArray.push(card);
        for (let i = this.age3CardArray.length - 2; i >= 0; i--) {
          if (this.age3CardArray[i].index > card.index) {
            let temp = this.age3CardArray[i];
            this.age3CardArray[i] = card;
            this.age3CardArray[i + 1] = temp;
          }
        }
        this.selectedCardCount++;
      }
      card.isSelected = !card.isSelected;
    } else if (card.age == 4) {
      if (card.isSelected) {
        this.age4CardArray.splice(this.age4CardArray.indexOf(card), 1);
        this.selectedCardCount--;
      } else {
        if (this.age4CardArray.length == this.cardLimitEachAge) return;
        if (this.selectedCardCount == this.maxCardCount) return;
        this.age4CardArray.push(card);
        for (let i = this.age4CardArray.length - 2; i >= 0; i--) {
          if (this.age4CardArray[i].index > card.index) {
            let temp = this.age4CardArray[i];
            this.age4CardArray[i] = card;
            this.age4CardArray[i + 1] = temp;
          }
        }
        this.selectedCardCount++;
      }
      card.isSelected = !card.isSelected;
    }
    this.saveDeckToLocal();
  }

  private getSaveString(): string {
    let age1: number[] = [];
    let age2: number[] = [];
    let age3: number[] = [];
    let age4: number[] = [];
    for (let i = 0; i < this.age1CardArray.length; i++) {
      age1.push(this.age1CardArray[i].index);
    }
    for (let i = 0; i < this.age2CardArray.length; i++) {
      age2.push(this.age2CardArray[i].index);
    }
    for (let i = 0; i < this.age3CardArray.length; i++) {
      age3.push(this.age3CardArray[i].index);
    }
    for (let i = 0; i < this.age4CardArray.length; i++) {
      age4.push(this.age4CardArray[i].index);
    }
    let save: backend.DeckSave = backend.DeckSave.create({
      deckName: this.deckName,
      idCiv: this.selectedCivId,
      selectedLanguage: this.selectedLanguage,
      radioType: this.radioType,
      byAgeTab: this.currentAgeTab,
      byTypeTab: this.currentTypeTab,
      ageUpTab: this.currentAgeUpTab,
      search: this.search,
      age2Option: this.ageUpOption2.getAgeOption(),
      age3Option: this.ageUpOption3.getAgeOption(),
      age4Option: this.ageUpOption4.getAgeOption(),
      age5Option: this.ageUpOption5.getAgeOption(),
      age1Array: age1,
      age2Array: age2,
      age3Array: age3,
      age4Array: age4,
    });

    return btoa(String.fromCharCode(...backend.DeckSave.encode(save).finish()));
  }

  public sharedLink: string = `${location.origin}/deckbuilder?q=`

  public copySharedLink(): void {
    this.sharedLink = `${location.origin}/deckbuilder?q=${this.getSaveString()}`
  }

  public reset(): void {
    for (let i = 0; i < this.age1CardArray.length; i++) {
      this.age1CardArray[i].isSelected = false;
    }
    for (let i = 0; i < this.age2CardArray.length; i++) {
      this.age2CardArray[i].isSelected = false;
    }
    for (let i = 0; i < this.age3CardArray.length; i++) {
      this.age3CardArray[i].isSelected = false;
    }
    for (let i = 0; i < this.age4CardArray.length; i++) {
      this.age4CardArray[i].isSelected = false;
    }
    this.age1CardArray = [];
    this.age2CardArray = [];
    this.age3CardArray = [];
    this.age4CardArray = [];
    this.ageUpCardArray = [];
    this.ageUpOption2.InitSelection(-1);
    this.ageUpOption3.InitSelection(-1);
    this.ageUpOption4.InitSelection(-1);
    this.ageUpOption5.InitSelection(-1);
    this.selectedCardCount = 0;
    this.saveDeckToLocal();
  }

  public downloadScreenshot(): void {
    this.captureAsync();
  }

  private async captureAsync(): Promise<void> {
    this.hideSpinner = false;
    let rect = this.deck.getBoundingClientRect();
    await lastValueFrom(this.captureService.getImage(this.deck, false, {
      x: 0, y: 0, width: rect.width - 1, height: rect.height
    }).pipe(
      tap((img) => {
        this.captureService.downloadImage(img);
      })
    ));
    this.hideSpinner = true;
  }

  public randomDeck(): void {
    this.reset();
    while (this.selectedCardCount < this.maxCardCount) {
      let age = getRandomInt(1, 4);
      let cardIndex: number;
      let card: Card;
      switch (age) {
        case 1:
          if (this.age1CardArray.length == this.cardLimitEachAge) continue;
          cardIndex = getRandomInt(0, this.age1Pool.length - 1);
          if (this.age1Pool[cardIndex].isSelected) continue;
          this.onClickCard(this.age1Pool[cardIndex]);
          break;
        case 2:
          if (this.age2CardArray.length == this.cardLimitEachAge) continue;
          cardIndex = getRandomInt(0, this.age2Pool.length - 1);
          if (this.age2Pool[cardIndex].isSelected) continue;
          this.onClickCard(this.age2Pool[cardIndex]);
          break;
        case 3:
          if (this.age3CardArray.length == this.cardLimitEachAge) continue;
          cardIndex = getRandomInt(0, this.age3Pool.length - 1);
          if (this.age3Pool[cardIndex].isSelected) continue;
          this.onClickCard(this.age3Pool[cardIndex]);
          break;
        case 4:
          if (this.age4CardArray.length == this.cardLimitEachAge) continue;
          cardIndex = getRandomInt(0, this.age4Pool.length - 1);
          if (this.age4Pool[cardIndex].isSelected) continue;
          this.onClickCard(this.age4Pool[cardIndex]);
          break;
      }
    }
    this.saveDeckToLocal();
  }

  public getPostgameFlagSrc(): string {
    return idCivToFlagLeft(this.selectedCivId);
  }

  public onSearchChanged(searchValue: string) {
    this.search = searchValue;

  }

  public onDeckNameChanged(event: any) {
    this.deckName = event.target.value;
    this.saveDeckToLocal();
  }

  private saveDeckToLocal(): void {
    localStorage.setItem(this.saveKey, this.getSaveString());
  }

  public print(): void {
    this.stringTableService.print();
  }
}