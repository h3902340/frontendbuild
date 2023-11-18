import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { Civ, foodIconSrc, goldIconSrc, influenceIconSrc, shipmentIconSrc, woodIconSrc } from 'src/app/constant';
import { backend } from 'src/app/proto/compiled';
import { JsonService } from 'src/app/services/json.service';
import { StrTableService } from 'src/app/services/string-table.service';
import { TechTreeService } from 'src/app/services/tech-tree.service';
import { Card, Language, getBrowserLanguage, getCardFromTech, getTechByName, sleep } from 'src/app/utility';

export type AgeUpAddedTech = {
  icon: string;
  title: string;
  rolloverText: string
}

export type AgeUpOption = {
  title: string;
  thumbnail: string;
  foodCost: number;
  woodCost: number;
  coinCost: number;
  influenceCost: number;
  rolloverText: string;
  addedTechHeading: string;
  addedcards: Card[];
}

@Component({
  selector: 'app-age-up-option',
  templateUrl: './age-up-option.component.html',
  styleUrls: ['./age-up-option.component.css']
})
export class AgeUpOptionComponent implements OnInit, AfterViewInit {
  @Input()
  public idCiv: Civ;
  @Input()
  public age: number;
  @Input()
  public selectLanguage: Language;
  @Output()
  public onOptionClickedEvent = new EventEmitter<{ age: number, option: number }>();

  @ViewChildren('option')
  public options: QueryList<ElementRef>;

  public ageOptions: AgeUpOption[];
  public hidden: boolean = true;
  public foodIcon: string;
  public woodIcon: string;
  public goldIcon: string;
  public influenceIcon: string;
  public shipmentIcon: string;
  public addedTechHeading: string;
  public ageUpTip2: string;
  public ageUpTip3: string;
  public ageUpTip4: string;
  public ageUpTip5: string;
  public goldenText: string;
  public goldenText2: string;

  private ageSelectedOption: number = -1;
  private isInit: boolean = false;
  private ageOptionsTechNames: string[] = [];
  private readonly ageUpThumbnailRoot: string = 'assets/Data/wpfg/resources/images/icons/flags/techtree/';

  constructor(private stringTableService: StrTableService, private techTreeService: TechTreeService, private jsonService: JsonService) { }

  public async ngOnInit() {
    if (!this.selectLanguage) {
      this.selectLanguage = getBrowserLanguage();
    }
    this.foodIcon = foodIconSrc;
    this.woodIcon = woodIconSrc;
    this.goldIcon = goldIconSrc;
    this.influenceIcon = influenceIconSrc;
    this.shipmentIcon = shipmentIconSrc;
    switch (this.idCiv) {
      case Civ.UnitedStates:
        switch (this.age) {
          case 2:
            this.ageOptionsTechNames = [
              'DEPoliticianFederalMassachusetts',
              'DEPoliticianFederalVirginia',
              'DEPoliticianFederalDelaware',
              'DEPoliticianFederalPennsylvania',
              'DEPoliticianFederalRhodeIsland'
            ];
            break;
          case 3:
            this.ageOptionsTechNames = [
              'DEPoliticianFederalIndiana',
              'DEPoliticianFederalNewHampshire',
              'DEPoliticianFederalMaryland',
              'DEPoliticianFederalTennessee',
              'DEPoliticianFederalKentucky'
            ];
            break;
          case 4:
            this.ageOptionsTechNames = [
              'DEPoliticianFederalSouthCarolina',
              'DEPoliticianFederalVermont',
              'DEPoliticianFederalCalifornia',
              'DEPoliticianFederalNewJersey',
              'DEPoliticianFederalOhio'
            ];
            break;
          case 5:
            this.ageOptionsTechNames = [
              'DEPoliticianFederalIllinois',
              'DEPoliticianFederalConnecticut',
              'DEPoliticianFederalNewYork',
              'DEPoliticianFederalTexas',
              'DEPoliticianFederalFlorida'
            ];
            break;
        }
        break;
      case Civ.Mexicans:
        switch (this.age) {
          case 2:
            this.ageOptionsTechNames = [
              'DEPoliticianFederalMXChiapas',
              'DEPoliticianFederalMXDurango',
              'DEPoliticianFederalMXMichoacan',
              'DEPoliticianFederalMXQueretaro',
              'DEPoliticianFederalMXTlaxcala'
            ];
            break;
          case 3:
            this.ageOptionsTechNames = [
              'DEPoliticianFederalMXSonora',
              'DEPoliticianFederalMXCoahuila',
              'DEPoliticianFederalMXSinaloa',
              'DEPoliticianFederalMXSanLuisPotosi',
              'DEPoliticianFederalMXTabasco'
            ];
            break;
          case 4:
            this.ageOptionsTechNames = [
              'DEPoliticianFederalMXChihuahua',
              'DEPoliticianFederalMXZacatecas',
              'DEPoliticianFederalMXTamaulipas',
              'DEPoliticianFederalMXGuanajuato',
              'DEPoliticianFederalMXGuerrero'
            ];
            break;
          case 5:
            this.ageOptionsTechNames = [
              'DEPoliticianFederalMXOaxaca',
              'DEPoliticianFederalMXJalisco',
              'DEPoliticianFederalMXMexico',
              'DEPoliticianFederalMXVeracruz',
              'DEPoliticianFederalMXPuebla'
            ];
            break;
        }
        break;
    }
    this.ageOptions = [];
    for (let i = 0; i < this.ageOptionsTechNames.length; i++) {
      this.ageOptions.push(await this.getAgeUpOption(this.ageOptionsTechNames[i]));
    }

    let map = await this.stringTableService.getLocalizedStrings([
      110265, 111408, 111409, 111410, 111411, 28387, 70927
    ]);
    this.addedTechHeading = map[110265];
    this.ageUpTip2 = map[111408];
    this.ageUpTip3 = map[111409];
    this.ageUpTip4 = map[111410];
    this.ageUpTip5 = map[111411];
    this.goldenText = map[28387];
    this.goldenText2 = map[70927];
  }

  public ngAfterViewInit(): void {
    this.isInit = true;
  }

  public async InitSelection(option: number) {
    if (this.options.length == 0) return;
    this.ageSelectedOption = option;
    while (!this.isInit) {
      await sleep(100);
    }
    for (let i = 0; i < this.options.length; i++) {
      this.options.get(i)!.nativeElement.classList.remove('option-selected');
    }
    if (option == -1) return;
    this.options.get(option)!.nativeElement.classList.add('option-selected');
  }

  private async getAgeUpOption(techName: string): Promise<AgeUpOption> {
    let tech = await getTechByName(this.techTreeService, techName);
    let title = await this.stringTableService.getLocalizedString(tech.displaynameid!);
    let thumbnail = this.getAgeUpThumbnail(techName)!;
    let foodCost: number = -1;
    let woodCost: number = -1;
    let coinCost: number = -1;
    let influenceCost: number = -1;
    if (tech.costs) {
      for (let i = 0; i < tech.costs.length!; i++) {
        if (tech.costs[i].resourcetype == backend.TechResourceType.Food) {
          foodCost = tech.costs[i].amount!;
        } else if (tech?.costs[i].resourcetype == backend.TechResourceType.Wood) {
          woodCost = tech.costs[i].amount!;
        } else if (tech?.costs[i].resourcetype == backend.TechResourceType.Gold) {
          coinCost = tech.costs[i].amount!;
        } else if (tech?.costs[i].resourcetype == backend.TechResourceType.Influence) {
          influenceCost = tech.costs[i].amount!;
        }
      }
    }
    let rolloverText: string | null = await this.stringTableService.getLocalizedString(tech?.rollovertextid!);
    let addedcards: Card[] = [];
    for (let i = 0; i < tech.effects!.length; i++) {
      let effect = tech.effects![i];
      if (effect.type != 'AddHomeCityCard') continue;
      let maxCount: number = Number(effect.maxcount);
      let amount: number = Number(effect.unitcount);
      let card = await this.getCardByTechName(effect.tech!, maxCount, amount);
      if (!card) continue;
      addedcards.push(card);
    }
    if (this.idCiv == Civ.UnitedStates && this.age == 4) {
      let card = await this.getCardByTechName('HCXPIndustrialRevolution', 1, 1);
      if (card) {
        addedcards.push(card);
      }
      card = await this.getCardByTechName('HCRobberBarons', 1, 1);
      if (card) {
        addedcards.push(card);
      }
    }
    return {
      title: title,
      thumbnail: thumbnail,
      foodCost: foodCost,
      woodCost: woodCost,
      coinCost: coinCost,
      influenceCost: influenceCost,
      rolloverText: rolloverText,
      addedTechHeading: this.addedTechHeading,
      addedcards: addedcards
    }
  }

  private async getCardByTechName(techName: string, maxCount: number, amount: number): Promise<Card | null> {
    let addedTech = await getTechByName(this.techTreeService, techName)!;
    if (amount == 0) {
      for (let j = 0; j < addedTech.effects!.length; j++) {
        if (addedTech.effects![j].subtype == 'FreeHomeCityUnitByShipmentCount') {
          amount += Number(addedTech.effects![j].amount);
        } else if (addedTech.effects![j].subtype == 'FreeHomeCityUnit') {
          amount += Number(addedTech.effects![j].amount);
        } else if (addedTech.effects![j].subtype == 'FreeHomeCityUnitIfTechObtainable') {
          amount += Number(addedTech.effects![j].amount);
        }
      }
    }
    return getCardFromTech(this.stringTableService, this.techTreeService, addedTech, this.idCiv, this.jsonService, amount, maxCount, this.age);
  }

  private getAgeUpThumbnail(techName: string): string | null {
    switch (techName) {
      case 'DEPoliticianFederalMassachusetts':
        return `${this.ageUpThumbnailRoot}techtree_us_massachussetts.png`;
      case 'DEPoliticianFederalVirginia':
        return `${this.ageUpThumbnailRoot}techtree_us_virginia.png`;
      case 'DEPoliticianFederalDelaware':
        return `${this.ageUpThumbnailRoot}techtree_us_delaware.png`;
      case 'DEPoliticianFederalPennsylvania':
        return `${this.ageUpThumbnailRoot}techtree_us_pennsylvania.png`;
      case 'DEPoliticianFederalRhodeIsland':
        return `${this.ageUpThumbnailRoot}techtree_us_rhode island.png`;

      case 'DEPoliticianFederalIndiana':
        return `${this.ageUpThumbnailRoot}techtree_us_indiana.png`;
      case 'DEPoliticianFederalNewHampshire':
        return `${this.ageUpThumbnailRoot}techtree_us_new hampshire.png`;
      case 'DEPoliticianFederalMaryland':
        return `${this.ageUpThumbnailRoot}techtree_us_maryland.png`;
      case 'DEPoliticianFederalTennessee':
        return `${this.ageUpThumbnailRoot}techtree_us_tennessee.png`;
      case 'DEPoliticianFederalKentucky':
        return `${this.ageUpThumbnailRoot}techtree_us_kentucky.png`;

      case 'DEPoliticianFederalSouthCarolina':
        return `${this.ageUpThumbnailRoot}techtree_us_south carolina.png`;
      case 'DEPoliticianFederalVermont':
        return `${this.ageUpThumbnailRoot}techtree_us_vermont.png`;
      case 'DEPoliticianFederalCalifornia':
        return `${this.ageUpThumbnailRoot}techtree_us_california.png`;
      case 'DEPoliticianFederalNewJersey':
        return `${this.ageUpThumbnailRoot}techtree_us_new jersey.png`;
      case 'DEPoliticianFederalOhio':
        return `${this.ageUpThumbnailRoot}techtree_us_ohio.png`;

      case 'DEPoliticianFederalIllinois':
        return `${this.ageUpThumbnailRoot}techtree_us_illinois.png`;
      case 'DEPoliticianFederalConnecticut':
        return `${this.ageUpThumbnailRoot}techtree_us_connecticut.png`;
      case 'DEPoliticianFederalNewYork':
        return `${this.ageUpThumbnailRoot}techtree_us_new york.png`;
      case 'DEPoliticianFederalTexas':
        return `${this.ageUpThumbnailRoot}techtree_us_texas.png`;
      case 'DEPoliticianFederalFlorida':
        return `${this.ageUpThumbnailRoot}techtree_us_florida.png`;
      // mexicans
      case 'DEPoliticianFederalMXChiapas':
        return `${this.ageUpThumbnailRoot}techtree_mx_chiapas.png`;
      case 'DEPoliticianFederalMXDurango':
        return `${this.ageUpThumbnailRoot}techtree_mx_durango.png`;
      case 'DEPoliticianFederalMXMichoacan':
        return `${this.ageUpThumbnailRoot}techtree_mx_michoacan.png`;
      case 'DEPoliticianFederalMXQueretaro':
        return `${this.ageUpThumbnailRoot}techtree_mx_rev_mexico.png`;
      case 'DEPoliticianFederalMXTlaxcala':
        return `${this.ageUpThumbnailRoot}techtree_mx_tlaxcala.png`;

      case 'DEPoliticianFederalMXSonora':
        return `${this.ageUpThumbnailRoot}techtree_mx_sonora.png`;
      case 'DEPoliticianFederalMXCoahuila':
        return `${this.ageUpThumbnailRoot}techtree_mx_coahuila.png`;
      case 'DEPoliticianFederalMXSinaloa':
        return `${this.ageUpThumbnailRoot}techtree_mx_sinaloa.png`;
      case 'DEPoliticianFederalMXSanLuisPotosi':
        return `${this.ageUpThumbnailRoot}techtree_mx_san_luis_potosi.png`;
      case 'DEPoliticianFederalMXTabasco':
        return `${this.ageUpThumbnailRoot}techtree_mx_tabasco.png`;

      case 'DEPoliticianFederalMXChihuahua':
        return `${this.ageUpThumbnailRoot}techtree_mx_chihuahua.png`;
      case 'DEPoliticianFederalMXZacatecas':
        return `${this.ageUpThumbnailRoot}techtree_mx_zacatecas.png`;
      case 'DEPoliticianFederalMXTamaulipas':
        return `${this.ageUpThumbnailRoot}techtree_mx_tamaulipas.png`;
      case 'DEPoliticianFederalMXGuanajuato':
        return `${this.ageUpThumbnailRoot}techtree_mx_guanajuato.png`;
      case 'DEPoliticianFederalMXGuerrero':
        return `${this.ageUpThumbnailRoot}techtree_mx_guerrero.png`;

      case 'DEPoliticianFederalMXOaxaca':
        return `${this.ageUpThumbnailRoot}techtree_mx_oaxaca.png`;
      case 'DEPoliticianFederalMXJalisco':
        return `${this.ageUpThumbnailRoot}techtree_mx_jalisco.png`;
      case 'DEPoliticianFederalMXMexico':
        return `${this.ageUpThumbnailRoot}techtree_mx_mexico.png`;
      case 'DEPoliticianFederalMXVeracruz':
        return `${this.ageUpThumbnailRoot}techtree_mx_veracruz.png`;
      case 'DEPoliticianFederalMXPuebla':
        return `${this.ageUpThumbnailRoot}techtree_mx_puebla.png`;
      default:
        return null;
    }
  }

  public hasFederalCards(): boolean {
    return this.idCiv == Civ.UnitedStates || this.idCiv == Civ.Mexicans;
  }

  public getSelectAgeTip(): string | null {
    switch (this.idCiv) {
      case Civ.UnitedStates:
        switch (this.age) {
          case 2:
            return this.ageUpTip2;
          case 3:
            return this.ageUpTip3;
          case 4:
            return this.ageUpTip4;
          case 5:
            return this.ageUpTip5;
        }
        break;
    }
    return null;
  }

  public getAgeOption(): number {
    return this.ageSelectedOption;
  }

  public getSelectedCards(): Card[] {
    if (this.ageSelectedOption == -1) return [];
    return this.ageOptions[this.ageSelectedOption].addedcards;
  }

  public onClickAgeUpOption(ageUpOption: number): void {
    if (this.ageSelectedOption != -1) {
      this.options.get(this.ageSelectedOption)!.nativeElement.classList.remove('option-selected');
    }
    this.options.get(ageUpOption)!.nativeElement.classList.add('option-selected');
    this.ageSelectedOption = ageUpOption;
    this.onOptionClickedEvent.next({ age: this.age, option: ageUpOption });
  }
}
