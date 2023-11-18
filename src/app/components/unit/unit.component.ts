import { Component, OnInit } from '@angular/core';
import { Civ, age1IconSrc, age2IconSrc, age3IconSrc, age4IconSrc, age5IconSrc, armorMeleeIconSrc, armorRangedIconSrc, armorSiegeIconSrc, artilleryDepotIconSrc, attackMeleeIconSrc, attackRangedIconSrc, attackSiegeIconSrc, corralIconSrc, counterArrowKnightIconSrc, counterArtilleryIconSrc, counterCavIconSrc, counterDockIconSrc, counterFixedGunIconSrc, counterGatlingCamelIconSrc, counterGuardianIconSrc, counterHeavyCavIconSrc, counterHeavyInfIconSrc, counterHeroIconSrc, counterInfIconSrc, counterLightCavIconSrc, counterLightHandInfIconSrc, counterLightInfIconSrc, counterLightRangedInfIconSrc, counterMercenaryIconSrc, counterShipIconSrc, counterSiegeElephantIconSrc, counterSiegeTroopIconSrc, counterSpyIconSrc, counterVillagerIconSrc, counterWallIconSrc, fieldHostpitalIconSrc, fishIconSrc, houseIconSrc, hpIconSrc, idCivToFlagRectangle, ladderCivs, resourcesRoot, supportedLanguages, tacticsBombardCurIconSrc, tacticsBombardIconSrc, tacticsCoverIconSrc, tacticsDefendIconSrc, tacticsLimberIconSrc, tacticsMeleeCurIconSrc, tacticsMeleeIconSrc, tacticsStaggerCurIconSrc, tacticsStaggerIconSrc, tacticsStandGroundIconSrc, tacticsStealthIconSrc, tacticsTrampleIconSrc, tacticsVollyCurIconSrc, tacticsVollyIconSrc, townCenterIconSrc, tradingPostIconSrc, warHutIconSrc, whaleIconSrc } from 'src/app/constant';
import { JsonService } from 'src/app/services/json.service';
import { AbilitiesRoot } from 'src/app/types/abilities';
import { CivsRoot } from 'src/app/types/civs';
import { PowersRoot } from 'src/app/types/powers';
import { ProtoactionElement, Unit } from 'src/app/types/protoy';
import { SlingerTactics, Tactic, TacticsAction } from 'src/app/types/slinger.tactics';
import { Card, Language, civToName, getActionStringByUnit, getArray, getBrowserLanguage, getCardFromTech, getCivUnit, getTechByName, idCivToIndex, importAbilities, importAnimfile, importCivs, importHomeCity, importPowers, importProtoTable, importTactics, importTechtreedata, isTechAppliedToUnit, languageToName, stringToLanguage } from 'src/app/utility';
import { backend } from 'src/app/proto/compiled';
import { UnitInfo, UnitType, ArmorInfo, AttackInfo, HealRateInfo, GatherRateInfo, BuildRateInfo, DamageBonusInfo, PostureInfo, TacticsType, UpgradeInfo } from './data-structures';
import { HomecityRoot, PurpleCard, Tech as HomecityTech } from 'src/app/types/homecityamericans';
import { TechtreedataRoot } from 'src/app/types/techtreedata_british';
import { AnimfileRoot } from 'src/app/types/animfile';
import { StrTableService } from 'src/app/services/string-table.service';
import { TechTreeService } from 'src/app/services/tech-tree.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  public unitInfos: UnitInfo[];
  public protoTable: { [k: string]: Unit };
  private homeCity: HomecityRoot;
  private abilities: AbilitiesRoot;
  private powers: PowersRoot;
  private techtreedata: TechtreedataRoot;
  private animFileRoot: AnimfileRoot;
  public civList: Civ[] = ladderCivs;
  public unitTypeOptions: UnitType[] = [UnitType.Military, UnitType.Building];
  public unitTypeOptionNames: string[] = ['', ''];
  public civDisplayNames: string[];
  public civFlagRect = idCivToFlagRectangle;

  public timeHeading: string;

  public languages = supportedLanguages;
  public languageNames: string[];

  public selectedCiv: Civ = Civ.Aztecs;
  public selectedLanguage: Language;
  public selectedUnitType: UnitType;
  private saveKey: string = 'UnitSave';

  private civs: CivsRoot;
  public unityTypeText: string;
  public languageText: string;
  public civText: string;
  public unitTitle: string;

  constructor(private stringTableService: StrTableService, private techTreeService: TechTreeService, private jsonService: JsonService) {
    this.civDisplayNames = [];
    for (let i = 0; i < ladderCivs.length; i++) {
      this.civDisplayNames.push('');
    }
    this.languageNames = [];
    for (let i = 0; i < supportedLanguages.length; i++) {
      this.languageNames.push('');
    }
  }

  public async ngOnInit() {
    this.protoTable = await importProtoTable(this.jsonService);
    this.civs = await importCivs(this.jsonService);
    this.loadSave();
    await this.getUnits();
  }

  private loadSave(): void {
    try {
      let save = localStorage.getItem(this.saveKey);
      if (save) {
        var binaryString = atob(save);
        var bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        let restore = backend.UnitSave.decode(bytes);
        this.selectedCiv = restore.selectedIdCiv;
        this.selectedLanguage = stringToLanguage(restore.selectedLanguage);
        this.selectedUnitType = this.stringToUnitType(restore.selectedUnitType);
      }
    } catch (e) {
      console.error(e);
    }
    if (!this.selectedLanguage) {
      this.selectedLanguage = getBrowserLanguage();
    }
    if (!this.selectedUnitType) {
      this.selectedUnitType = UnitType.Military;
    }
  }

  private async getUnits() {
    this.unitTitle = await this.stringTableService.getLocalizedString(22424);
    this.civDisplayNames = [];
    for (let i = 0; i < ladderCivs.length; i++) {
      this.civDisplayNames.push(await civToName(this.stringTableService, ladderCivs[i]));
    }
    this.languageNames = [];
    for (let i = 0; i < this.languages.length; i++) {
      this.languageNames.push(await languageToName(this.stringTableService, this.languages[i]));
    }
    for (let i = 0; i < this.unitTypeOptions.length; i++) {
      this.unitTypeOptionNames[i] = await this.getLocalizedUnitType(this.unitTypeOptions[i]);
    }
    this.unityTypeText = await this.stringTableService.getLocalizedString(22302);
    this.languageText = await this.stringTableService.getLocalizedString(70880);
    this.civText = await this.stringTableService.getLocalizedString(18682);
    this.abilities = await importAbilities(this.jsonService);
    this.powers = await importPowers(this.jsonService);
    this.stringTableService.setLanguage(this.selectedLanguage);
    this.homeCity = await importHomeCity(this.selectedCiv, this.jsonService);
    this.techtreedata = await importTechtreedata(this.selectedCiv, this.jsonService);
    let timeText = await this.stringTableService.getLocalizedString(112775);
    let leftIndex = timeText.indexOf('(');
    this.timeHeading = timeText.substring(0, leftIndex - 1) + ': ';
    let nativeTechs: { buildingSrc: string, buildingTooltip: string, cards: { tech: backend.ITechInfo, card: Card }[] }[] = [];
    for (let civ of this.civs.civs.civ) {
      if (!civ.subcivtype) continue;
      let cards: { tech: backend.ITechInfo, card: Card }[] = [];
      for (let nativeTech of getArray(civ.agetech)) {
        let tech = await getTechByName(this.techTreeService, nativeTech.tech);
        if (!tech) continue;
        if (tech.effects) {
          for (let effect of tech.effects) {
            if (effect.type == 'TechStatus') {
              let tech = await getTechByName(this.techTreeService, effect.text!);
              if (!tech) continue;
              let card = await getCardFromTech(this.stringTableService, this.techTreeService, tech, this.selectedCiv, this.jsonService);
              if (!card) continue;
              cards.push({
                tech: tech,
                card: card,
              });
            }
          }
        }
      }
      let buildingSrc: string = '';
      if (civ.portrait?.startsWith('ui\\native_allies\\')) {
        buildingSrc = civ.portrait!.replace('ui\\native_allies\\', 'resources/images/icons/native_allies/') + '.png'
      } else if (civ.portrait?.startsWith('building')) {
        buildingSrc = `resources/art/${civ.portrait}`;
        if (!buildingSrc.endsWith('.png')) {
          buildingSrc += '.png';
        }
      } else {
        buildingSrc = civ.portrait!;
      }
      let nativeTech = {
        buildingSrc: resourcesRoot + buildingSrc,
        buildingTooltip: await this.stringTableService.getLocalizedString(civ.displaynameid!),
        cards: cards,
      };
      nativeTechs.push(nativeTech);
    }
    let units: Unit[] = await getCivUnit(this.techTreeService, this.selectedCiv);
    this.unitInfos = [];
    let index = 0;
    for (let unit of units) {
      if (index == 1) break;
      index++;
      this.animFileRoot = await importAnimfile(`assets/Art/${unit.animfile}.json`, this.jsonService);
      let nativeTechsApplied: UpgradeInfo[] = [];
      for (let nativeTech of nativeTechs) {
        let cards: Card[] = [];
        for (let card of nativeTech.cards) {
          if (isTechAppliedToUnit(card.tech, unit)) {
            cards.push(card.card);
          }
        }
        if (cards.length > 0) {
          nativeTechsApplied.push({
            buildingSrc: nativeTech.buildingSrc,
            buildingTooltip: nativeTech.buildingTooltip,
            cards: cards,
          })
        }
      }
      let ageTechArray = getArray(this.civs.civs.civ[idCivToIndex(this.selectedCiv)].agetech);
      let age2ShadowTechs: Card[] = await this.getShadowTechsFromAgeTech(ageTechArray[1].tech, unit);
      let age3ShadowTechs: Card[] = await this.getShadowTechsFromAgeTech(ageTechArray[2].tech, unit);
      let age4ShadowTechs: Card[] = await this.getShadowTechsFromAgeTech(ageTechArray[3].tech, unit);
      let age5ShadowTechs: Card[] = await this.getShadowTechsFromAgeTech(ageTechArray[4].tech, unit);
      if (!unit.unittype || !unit.unittype.includes(this.selectedUnitType)) continue;
      let rolloverText: string;
      if (Array.isArray(unit.rollovertextid)) {
        rolloverText = await this.stringTableService.getLocalizedString(unit.rollovertextid[0]);
      } else if (!unit.rollovertextid) {
        rolloverText = '';
      } else {
        rolloverText = await this.stringTableService.getLocalizedString(unit.rollovertextid);
      }
      if (rolloverText.startsWith('{')) {
        if (this.selectedCiv == Civ.Japanese) {
          let startIndex = rolloverText.indexOf('{J^') + 3;
          let endIndex = rolloverText.indexOf('^}', startIndex);
          rolloverText = rolloverText.substring(startIndex, endIndex);
        } else if (this.selectedCiv == Civ.Indians) {
          let startIndex = rolloverText.indexOf('{I^') + 3;
          let endIndex = rolloverText.indexOf('^}', startIndex);
          rolloverText = rolloverText.substring(startIndex, endIndex);
        } else {
          let startIndex = rolloverText.indexOf('{E^') + 3;
          let endIndex = rolloverText.indexOf('^}', startIndex);
          rolloverText = rolloverText.substring(startIndex, endIndex);
        }
      }
      let costs = getArray(unit.cost);
      let foodCost: number = 0;
      let woodCost: number = 0;
      let goldCost: number = 0;
      let influenceCost: number = 0;
      for (let cost of costs) {
        switch (cost['@resourcetype']) {
          case 'Food':
            foodCost = Number(cost['#text']);
            break;
          case 'Wood':
            woodCost = Number(cost['#text']);
            break;
          case 'Gold':
            goldCost = Number(cost['#text']);
            break;
          case 'Influence':
            influenceCost = Number(cost['#text']);
            break;
        }
      }

      let armors = getArray(unit.armor);
      let armorInfos: ArmorInfo[] = [];
      for (let armor of armors) {
        let src: string = '';
        switch (armor['@type']) {
          case 'Hand':
            src = armorMeleeIconSrc;
            break;
          case 'Ranged':
            src = armorRangedIconSrc;
            break;
          case 'Siege':
            src = armorSiegeIconSrc;
            break;
        }
        armorInfos.push({
          src: src,
          amount: Number(armor['@value'])
        })
      }
      let attacks = getArray(unit.protoaction);
      let attackInfos: AttackInfo[] = [];
      let healRate: HealRateInfo | null = null;
      let gatherRates: GatherRateInfo[] = [];
      let buildRates: BuildRateInfo[] = [];
      let actions: TacticsAction[] = [];
      let tacticsInfo: SlingerTactics | null = null;
      if (unit.tactics) {
        tacticsInfo = await importTactics<SlingerTactics>(unit.tactics.toLocaleLowerCase(), this.jsonService);
        actions = getArray(tacticsInfo.tactics.action);
      }
      for (let attack of attacks) {
        let isActive: boolean = true;
        for (let action of actions) {
          if (action.name['#text'] == attack.name) {
            if (action.active == '0') {
              isActive = false;
            }
            break;
          }
        }
        if (!isActive) continue;
        //if (!this.needToShowAttack(attack)) continue;
        if (attack.name == 'Heal') {
          let iconSrc: string = hpIconSrc;
          healRate = {
            src: iconSrc,
            range: this.findHealRange(actions),
            amount: Number(Object(attack.rate)['#text']),
          }
          continue;
        }
        if (attack.name == 'Build') {
          if (Array.isArray(attack.rate)) {
            for (let rate of attack.rate) {
              let iconSrc: string = rate['@type'];
              let tooltip: string = rate['@type'];
              switch (rate['@type']) {
                case 'TradingPost':
                  iconSrc = tradingPostIconSrc;
                  tooltip = await this.stringTableService.getLocalizedString(22837);
                  break;
                case 'TownCenter':
                  iconSrc = townCenterIconSrc;
                  tooltip = await this.stringTableService.getLocalizedString(22841);
                  break;
                case 'WarHut':
                  iconSrc = warHutIconSrc;
                  tooltip = await this.stringTableService.getLocalizedString(43492);
                  break;
                case 'ArtilleryDepot':
                  iconSrc = artilleryDepotIconSrc;
                  tooltip = await this.stringTableService.getLocalizedString(22922);
                  break;
                case 'Corral':
                  iconSrc = corralIconSrc;
                  tooltip = await this.stringTableService.getLocalizedString(43502);
                  break;
                case 'FieldHospital':
                  iconSrc = fieldHostpitalIconSrc;
                  tooltip = await this.stringTableService.getLocalizedString(29733);
                  break;
              }
              buildRates.push({
                src: iconSrc,
                tooltip: tooltip,
                amount: Number(rate['#text']),
              })
            }
          }
          continue;
        }
        if (attack.name == 'Gather') {
          if (Array.isArray(attack.rate)) {
            for (let rate of attack.rate) {
              let iconSrc: string = '';
              let tooltip: string = '';
              switch (rate['@type']) {
                case 'AbstractFish':
                  iconSrc = fishIconSrc;
                  tooltip = await this.stringTableService.getLocalizedString(22207);
                  break;
                case 'AbstractWhale':
                  iconSrc = whaleIconSrc;
                  tooltip = await this.stringTableService.getLocalizedString(43015);
                  break;
              }
              if (iconSrc == '') continue;
              gatherRates.push({
                src: iconSrc,
                tooltip: tooltip,
                amount: Number(rate['#text']),
              })
            }
          }
          continue;
        }
        let name: string = await getActionStringByUnit(this.stringTableService, unit['@name'], attack.name, this.selectedCiv, this.jsonService);
        let src: string = '';
        let damageType: string = getArray(attack.damagetype)[0];
        switch (damageType) {
          case 'Hand':
            src = attackMeleeIconSrc;
            break;
          case 'Ranged':
            src = attackRangedIconSrc;
            break;
          case 'Siege':
            src = attackSiegeIconSrc;
            break;
        }
        let amount: number = Number(attack.damage);
        let range: number = Number(attack.maxrange);
        let rof: number = Number(attack.rof);
        let damageBonuses = getArray(attack.damagebonus);
        let damageBonusInfos: DamageBonusInfo[] = [];
        for (let damagebonus of damageBonuses) {
          let src: string = damagebonus['@type'];
          let tooltip: string = damagebonus['@type'];
          switch (damagebonus['@type']) {
            case 'Ship':
              src = counterShipIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(42169);
              break;
            case 'AbstractWarShip':
              src = counterShipIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(42036);
              break;
            case 'AbstractHeavyInfantry':
              src = counterHeavyInfIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(42017);
              break;
            case 'AbstractHeavyCavalry':
              src = counterHeavyCavIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(25625);
              break;
            case 'AbstractCoyoteMan':
              src = counterLightHandInfIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(69436);
              break;
            case 'AbstractLightCavalry':
              src = counterLightCavIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(61396);
              break;
            case 'AbstractCavalry':
              src = counterCavIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(38214);
              break;
            case 'AbstractRangedShockInfantry':
              src = counterLightRangedInfIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(44138);
              break;
            case 'AbstractLightInfantry':
              src = counterLightInfIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(42089);
              break;
            case 'AbstractVillager':
              src = counterVillagerIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(42174);
              break;
            case 'AbstractArtillery':
              src = counterArtilleryIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(24101);
              break;
            case 'AbstractWall':
              src = counterWallIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(42181);
              break;
            case 'AbstractInfantry':
              src = counterInfIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(42167);
              break;
            case 'Guardian':
              src = counterGuardianIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(42025);
              break;
            case 'Hero':
              src = counterHeroIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(32485);
              break;
            case 'deMalteseGun':
              src = counterFixedGunIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(33598);
              break;
            case 'AbstractSiegeTrooper':
              src = counterSiegeTroopIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(42026);
              break;
            case 'MercType2':
              src = counterSpyIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(46322);
              break;
            case 'Building':
              src = houseIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(19159);
              break;
            case 'xpArrowKnight':
              src = counterArrowKnightIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(44148);
              break;
            case 'xpArrowKnight':
              src = counterArrowKnightIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(44148);
              break;
            case 'AbstractSiegeElephant':
              src = counterSiegeElephantIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(60136);
              break;
            case 'deMercGatlingCamel':
              src = counterGatlingCamelIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(43167);
              break;
            case 'AbstractDock':
              src = counterDockIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(22914);
              break;
            case 'Mercenary':
              src = counterMercenaryIconSrc;
              tooltip = await this.stringTableService.getLocalizedString(42020);
              break;
          }
          let amount = Number(damagebonus['#text']);
          damageBonusInfos.push({
            src: src,
            tooltip: tooltip,
            amount: amount,
          })
        }
        let attackInfo: AttackInfo = {
          name: name,
          actionKey: attack.name,
          hidden: false,
          src: src,
          amount: amount,
          range: range,
          rof: rof,
          damageArea: attack.damagearea ? Number(attack.damagearea) : 0,
          damageBonuses: damageBonusInfos
        }
        attackInfos.push(attackInfo);
      }
      let types: string = '';
      if (Array.isArray(unit.unittype)) {
        for (let j = 0; j < unit.unittype.length; j++) {
          let unittype = unit.unittype[j];
          let type: string = await this.getUnitTypeName(unittype);
          if (type != '') {
            if (types.length > 0) {
              types += ', ';
            }
            types += type;
          }
          if (unittype == 'AbstractSiegeTrooper') {
            types += ', ';
            types += await this.stringTableService.getLocalizedString(42026);
          }
        }
      }
      let attackInfosSorted: AttackInfo[] = [];
      if (Array.isArray(unit.unittype) && unit.unittype.includes('AbstractWarShip')) {
        for (let i = attackInfos.length - 1; i >= 0; i--) {
          if (attackInfos[i].actionKey.includes('Building')) {
            attackInfosSorted.push(attackInfos[i]);
            attackInfos.splice(i, 1);
          }
        }
        for (let i = attackInfos.length - 1; i >= 0; i--) {
          if (attackInfos[i].actionKey.includes('Ranged')) {
            attackInfosSorted.push(attackInfos[i]);
            attackInfos.splice(i, 1);
          }
        }
      } else {
        for (let i = attackInfos.length - 1; i >= 0; i--) {
          if (attackInfos[i].actionKey.includes('Ranged')) {
            attackInfosSorted.push(attackInfos[i]);
            attackInfos.splice(i, 1);
          }
        }
        for (let i = attackInfos.length - 1; i >= 0; i--) {
          if (attackInfos[i].actionKey.includes('Building')) {
            attackInfosSorted.push(attackInfos[i]);
            attackInfos.splice(i, 1);
          }
        }
      }

      for (let i = attackInfos.length - 1; i >= 0; i--) {
        if (attackInfos[i].actionKey.includes('Hand')) {
          attackInfosSorted.push(attackInfos[i]);
          attackInfos.splice(i, 1);
        }
      }
      for (let i = 0; i < attackInfos.length; i++) {
        attackInfosSorted.push(attackInfos[i]);
      }
      let isRanged: boolean = false;
      let postures: PostureInfo[] = [];
      let posture: PostureInfo | null;
      if (unit['@name'] != 'xpPetard') {
        posture = await this.getPostureInfo(tacticsInfo, TacticsType.Stealth);
        if (posture) {
          postures.push(posture);
        }
      }
      if (unit['@name'] != 'xpSpy') {
        posture = await this.getPostureInfo(tacticsInfo, TacticsType.Volley);
        if (posture) {
          posture.card.iconSrc = tacticsVollyCurIconSrc;
          postures.push(posture);
          isRanged = true;
        }
      }
      posture = await this.getPostureInfo(tacticsInfo, TacticsType.Stagger);
      if (posture) {
        if (!isRanged) {
          posture.card.iconSrc = tacticsStaggerCurIconSrc;
          isRanged = true;
        }
        postures.push(posture);
      }
      posture = await this.getPostureInfo(tacticsInfo, TacticsType.Melee);
      if (posture) {
        if (!isRanged) {
          posture.card.iconSrc = tacticsMeleeCurIconSrc;
        }
        postures.push(posture);
      }
      if (unit['@name'] != 'xpAztecWarchief') {
        posture = await this.getPostureInfo(tacticsInfo, TacticsType.Cover);
        if (posture) {
          postures.push(posture);
        }
      }
      posture = await this.getPostureInfo(tacticsInfo, TacticsType.Trample);
      if (posture) {
        postures.push(posture);
      }
      if (unit['@name'] != 'xpPetard') {
        posture = await this.getPostureInfo(tacticsInfo, TacticsType.Defend);
        if (posture) {
          postures.push(posture);
        }
      }
      posture = await this.getPostureInfo(tacticsInfo, TacticsType.StandGround);
      if (posture) {
        postures.push(posture);
      }
      posture = await this.getPostureInfo(tacticsInfo, TacticsType.Bombard);
      if (posture) {
        posture.card.iconSrc = tacticsBombardCurIconSrc;
        postures.push(posture);
      }
      posture = await this.getPostureInfo(tacticsInfo, TacticsType.Limber);
      if (posture) {
        postures.push(posture);
      }
      let abilityInfos: Card[] = [];
      let abilityArray = this.abilities.abilities[unit['@name'].toLowerCase()];
      if (abilityArray) {
        let abilities = getArray(abilityArray.ability);
        for (let j = 0; j < abilities.length; j++) {
          if (abilities[j].civ || abilities[j].tech) continue;
          if (abilities[j].nevershowingrid) continue;
          if (abilities[j].tech?.includes('Shadow')) continue;
          for (let power of this.powers.powers.power) {
            if (power['@name'] == abilities[j]['#text']) {
              abilityInfos.push({
                iconSrc: resourcesRoot + power.icon,
                amount: 0,
                maxCount: 0,
                foodCost: 0,
                woodCost: 0,
                coinCost: 0,
                influenceCost: 0,
                shipmentCost: 0,
                displayName: await this.stringTableService.getLocalizedString(power.displaynameid!),
                techName: '',
                rolloverText: await this.stringTableService.getLocalizedString(power.rolloverid!),
                details: [],
                pop: 0,
                index: -1,
                age: 0,
                buildingIndex: -1,
                isSelected: false,
              });
            }
          }
        }
      }
      let allowAgeSrc: string = '';
      switch (Number(getArray(unit.allowedage)[0]) + 1) {
        case 1:
          allowAgeSrc = age1IconSrc;
          break;
        case 2:
          allowAgeSrc = age2IconSrc;
          break;
        case 3:
          allowAgeSrc = age3IconSrc;
          break;
        case 4:
          allowAgeSrc = age4IconSrc;
          break;
        case 5:
          allowAgeSrc = age5IconSrc;
          break;
      }
      let los = Number(unit.los);
      let tech = await getTechByName(this.techTreeService, ageTechArray[0].tech);
      if (tech.effects) {
        for (let i = 0; i < tech.effects.length; i++) {
          let effect = tech.effects[i]!;
          if (effect.targettext != unit['@name']) {
            break;
          }
          if (effect.subtype == 'LOS') {
            if (effect.relativity == backend.TechRelativity.Absolute) {
              los += Number(effect.amount);
            }
          } else if (effect.subtype == 'MaximumRange') {
            for (let k = 0; k < attackInfosSorted.length; k++) {
              if (attackInfosSorted[k].actionKey == effect.action) {
                if (effect.relativity == backend.TechRelativity.Absolute) {
                  attackInfosSorted[k].range += Number(effect.amount);
                }
                break;
              }
            }
          }
        }
      }
      let upgrades: UpgradeInfo[] = [];
      for (let group of this.techtreedata.techtreedata.group) {
        let techs = getArray(group.tech);
        let cards: Card[] = [];
        for (let k = 0; k < techs.length; k++) {
          let tech = await getTechByName(this.techTreeService, techs[k]['@name']);
          if (!isTechAppliedToUnit(tech, unit)) continue;
          let card = await getCardFromTech(this.stringTableService, this.techTreeService, tech, this.selectedCiv, this.jsonService)!;
          if (!card) continue;
          cards.push(card);
        }
        if (cards.length > 0 && group.proto) {
          let protos = getArray(group.proto);
          let buildingSrc: string = resourcesRoot + protos[0]['@icon'];
          let buildingTooltip: string = await this.stringTableService.getLocalizedString(this.protoTable[protos[0]['@name']].displaynameid!);
          upgrades.push({
            buildingSrc: buildingSrc,
            buildingTooltip: buildingTooltip,
            cards: cards,
          })
        }
      }
      let homecityCards = await this.getAvailableTechsForUnit(unit);
      let age1Cards: Card[] = [];
      let age2Cards: Card[] = [];
      let age3Cards: Card[] = [];
      let age4Cards: Card[] = [];
      for (let card of homecityCards) {
        switch (card.age) {
          case 1:
            age1Cards.push(card);
            break;
          case 2:
            age2Cards.push(card);
            break;
          case 3:
            age3Cards.push(card);
            break;
          case 4:
            age4Cards.push(card);
            break;
        }
      }
      if (age1Cards.length > 0) {
        upgrades.push({
          buildingSrc: age1IconSrc,
          buildingTooltip: await this.stringTableService.getLocalizedString(36129),
          cards: age1Cards
        })
      }
      if (age2Cards.length > 0) {
        upgrades.push({
          buildingSrc: age2IconSrc,
          buildingTooltip: await this.stringTableService.getLocalizedString(36130),
          cards: age2Cards
        })
      }
      if (age3Cards.length > 0) {
        upgrades.push({
          buildingSrc: age3IconSrc,
          buildingTooltip: await this.stringTableService.getLocalizedString(36131),
          cards: age3Cards
        })
      }
      if (age4Cards.length > 0) {
        upgrades.push({
          buildingSrc: age4IconSrc,
          buildingTooltip: await this.stringTableService.getLocalizedString(36132),
          cards: age4Cards
        })
      }
      upgrades = upgrades.concat(nativeTechsApplied);
      this.unitInfos.push({
        src: `assets/Data/wpfg/${unit.portraiticon}`,
        name: await this.stringTableService.getLocalizedString(unit.displaynameid!),
        animFileInfo: this.animFileRoot,
        protoKey: unit['@name'],
        rolloverText: rolloverText,
        foodCost: foodCost,
        woodCost: woodCost,
        goldCost: goldCost,
        influenceCost: influenceCost,
        pop: unit.populationcount ? Number(unit.populationcount) : 0,
        initialHP: Number(unit.initialhitpoints),
        maxHP: Number(unit.maxhitpoints),
        speed: Number(unit.maxvelocity),
        los: los,
        trainTime: Number(unit.trainpoints),
        buildBounty: Number(unit.buildbounty),
        killBounty: Number(unit.bounty),
        types: types,
        isRanged: isRanged,
        allowAgeSrc: allowAgeSrc,
        postures: postures,
        armors: armorInfos,
        attackInfos: attackInfosSorted,
        abilities: abilityInfos,
        healRate: healRate,
        gatherRates: gatherRates,
        buildRates: buildRates,
        upgrades: upgrades,
        age2ShadowTechs: age2ShadowTechs,
        age3ShadowTechs: age3ShadowTechs,
        age4ShadowTechs: age4ShadowTechs,
        age5ShadowTechs: age5ShadowTechs,
      })
    }
  }

  private async getUnitTypeName(unittype: string): Promise<string> {
    switch (unittype) {
      case 'LogicalTypeLandMilitary':
        return this.stringTableService.getLocalizedString(79820);
      case 'AbstractSkirmisher':
        return this.stringTableService.getLocalizedString(45485);
      case 'AbstractRangedInfantry':
        return this.stringTableService.getLocalizedString(42032);
      case 'AbstractHandInfantry':
        return this.stringTableService.getLocalizedString(42034);
      case 'AbstractHeavyInfantry':
        return this.stringTableService.getLocalizedString(42017);
      case 'AbstractHeavyInfantry':
        return this.stringTableService.getLocalizedString(42017);
      case 'AbstractInfantry':
        return this.stringTableService.getLocalizedString(42167);
      case 'AbstractLightInfantry':
        return this.stringTableService.getLocalizedString(42089);
      case 'AbstractSiegeTrooper':
        return this.stringTableService.getLocalizedString(69637);
      case 'AbstractRangedShockInfantry':
        return this.stringTableService.getLocalizedString(44138);
      case 'AbstractCanSeeStealth':
        return this.stringTableService.getLocalizedString(69631);
      case 'Hero':
        return this.stringTableService.getLocalizedString(42175);
      case 'AbstractWarShip':
        return this.stringTableService.getLocalizedString(42036);
      case 'AbstractFishingBoat':
        return this.stringTableService.getLocalizedString(42030);
      case 'AbstractArtillery':
        return this.stringTableService.getLocalizedString(42094);
      case 'AbstractHandCavalry':
        return this.stringTableService.getLocalizedString(42035);
      case 'AbstractHeavyCavalry':
        return this.stringTableService.getLocalizedString(42088);
      case 'AbstractCavalry':
        return this.stringTableService.getLocalizedString(38214);
      case 'AbstractGunpowderTrooper':
        return this.stringTableService.getLocalizedString(42021);
      case 'AbstractHealer':
        return this.stringTableService.getLocalizedString(91813);
      case 'AbstractRangedCavalry':
        return this.stringTableService.getLocalizedString(42033);
      case 'AbstractLightCavalry':
        return this.stringTableService.getLocalizedString(42018);
      case 'AbstractGunpowderCavalry':
        return this.stringTableService.getLocalizedString(69634);
      default:
        return '';
    }
  }

  public onSelectCiv(event: any): void {
    this.selectedCiv = event.target.value;
    this.saveSave();
    this.loadSave();
    this.getUnits();
  }

  public onSelectLanguage(event: any): void {
    this.selectedLanguage = event.target.value;
    this.saveSave();
    this.loadSave();
    this.getUnits();
  }

  public onSelectUnitType(event: any): void {
    this.selectedUnitType = event.target.value;
    this.saveSave();
    this.loadSave();
    this.getUnits();
  }

  private saveSave(): void {
    let save: backend.UnitSave = backend.UnitSave.create({
      selectedIdCiv: this.selectedCiv,
      selectedLanguage: this.selectedLanguage,
      selectedUnitType: this.selectedUnitType,
    })
    let saveString = btoa(String.fromCharCode(...backend.UnitSave.encode(save).finish()));
    localStorage.setItem(this.saveKey, saveString);
  }

  private async getPostureInfo(tacticsInfo: SlingerTactics | null, target: TacticsType): Promise<PostureInfo | null> {
    if (!tacticsInfo) return null;
    let tacticsArray = getArray(tacticsInfo.tactics.tactic);
    let tacticsArray2 = getArray(tacticsInfo.tactics.action);
    let card = await this.findTactics(tacticsArray, target);
    let speedMultiplier: number = 1;
    let animsIdle: string[] = [];
    let animsBored: string[] = [];
    let animsDeath: string[] = [];
    let animsWalk: string[] = [];
    let animsJog: string[] = [];
    let animsRun: string[] = [];
    let animsAttack: string[] = [];
    for (let tactic of tacticsArray) {
      if (tactic['#text'] != target) continue;
      if (tactic.speedmodifier) {
        speedMultiplier = Number(tactic.speedmodifier);
      }
      for (let anim of this.animFileRoot.animfile.anim) {
        if (anim['#text'].toLowerCase() == tactic.idleanim.toLowerCase()) {
          let references = getArray(anim.assetreference);
          for (let reference of references) {
            animsIdle.push(reference.file.substring(reference.file.lastIndexOf('\\') + 1));
          }
        } else if (anim['#text'].toLowerCase() == tactic.boredanim.toLowerCase()) {
          let references = getArray(anim.assetreference);
          for (let reference of references) {
            animsBored.push(reference.file.substring(reference.file.lastIndexOf('\\') + 1));
          }
        } else if (anim['#text'].toLowerCase() == tactic.deathanim.toLowerCase()) {
          let references = getArray(anim.assetreference);
          for (let reference of references) {
            animsDeath.push(reference.file.substring(reference.file.lastIndexOf('\\') + 1));
          }
        } else if (anim['#text'].toLowerCase() == tactic.walkanim.toLowerCase()) {
          let references = getArray(anim.assetreference);
          for (let reference of references) {
            animsWalk.push(reference.file.substring(reference.file.lastIndexOf('\\') + 1));
          }
        } else if (anim['#text'].toLowerCase() == tactic.joganim.toLowerCase()) {
          let references = getArray(anim.assetreference);
          for (let reference of references) {
            animsJog.push(reference.file.substring(reference.file.lastIndexOf('\\') + 1));
          }
        } else if (anim['#text'].toLowerCase() == tactic.runanim.toLowerCase()) {
          let references = getArray(anim.assetreference);
          for (let reference of references) {
            animsRun.push(reference.file.substring(reference.file.lastIndexOf('\\') + 1));
          }
        } else {
          let actions = tactic.action;
          for (let action of actions) {
            for (let action2 of tacticsArray2) {
              if (action2.name['#text'] != action['#text']) continue;
              if (anim['#text'].toLowerCase() == action2.anim.toLowerCase()) {
                let references = getArray(anim.assetreference);
                for (let reference of references) {
                  animsAttack.push(reference.file.substring(reference.file.lastIndexOf('\\') + 1));
                }
              } else if (action2.reloadanim && anim['#text'].toLowerCase() == action2.reloadanim.toLowerCase()) {
                let references = getArray(anim.assetreference);
                for (let reference of references) {
                  animsAttack.push(reference.file.substring(reference.file.lastIndexOf('\\') + 1));
                }
              } else if (action2.idleanim && anim['#text'].toLowerCase() == action2.idleanim.toLowerCase()) {
                let references = getArray(anim.assetreference);
                for (let reference of references) {
                  animsAttack.push(reference.file.substring(reference.file.lastIndexOf('\\') + 1));
                }
              }
            }
          }
        }
      }
    }
    let anims = animsIdle.concat(animsBored).concat(animsDeath).concat(animsWalk).concat(animsJog).concat(animsRun).concat(animsAttack);
    anims = [...new Set(anims)];
    if (card) {
      return {
        tactics: target,
        card: card,
        speedMultiplier: speedMultiplier,
        anims: anims,
      };
    }
    return null;
  }

  private async findTactics(tacticsArray: Tactic[], target: TacticsType): Promise<Card | null> {
    for (let tactic of tacticsArray) {
      if (tactic['#text'] == target) {
        let iconSrc: string = '';
        let displayName: string = '';
        let rolloverText: string = '';
        switch (tactic['#text']) {
          case TacticsType.Stealth:
            iconSrc = tacticsStealthIconSrc;
            displayName = await this.stringTableService.getLocalizedString(46491);
            rolloverText = await this.stringTableService.getLocalizedString(46492);
            break;
          case TacticsType.Volley:
            iconSrc = tacticsVollyIconSrc;
            displayName = await this.stringTableService.getLocalizedString(65669);
            rolloverText = await this.stringTableService.getLocalizedString(31348);
            break;
          case TacticsType.Stagger:
            iconSrc = tacticsStaggerIconSrc;
            displayName = await this.stringTableService.getLocalizedString(65667);
            rolloverText = await this.stringTableService.getLocalizedString(35907);
            break;
          case TacticsType.Melee:
            iconSrc = tacticsMeleeIconSrc;
            displayName = await this.stringTableService.getLocalizedString(65670);
            rolloverText = await this.stringTableService.getLocalizedString(31350);
            break;
          case TacticsType.Cover:
            iconSrc = tacticsCoverIconSrc;
            displayName = await this.stringTableService.getLocalizedString(66068);
            rolloverText = await this.stringTableService.getLocalizedString(33039);
            break;
          case TacticsType.Trample:
            iconSrc = tacticsTrampleIconSrc;
            displayName = await this.stringTableService.getLocalizedString(38142);
            rolloverText = await this.stringTableService.getLocalizedString(35908);
            break;
          case TacticsType.Defend:
            iconSrc = tacticsDefendIconSrc;
            displayName = await this.stringTableService.getLocalizedString(65671);
            rolloverText = await this.stringTableService.getLocalizedString(31351);
            break;
          case TacticsType.StandGround:
            iconSrc = tacticsStandGroundIconSrc;
            displayName = await this.stringTableService.getLocalizedString(66067);
            rolloverText = await this.stringTableService.getLocalizedString(45734);
            break;
          case TacticsType.Bombard:
            iconSrc = tacticsBombardIconSrc;
            displayName = await this.stringTableService.getLocalizedString(66066);
            rolloverText = await this.stringTableService.getLocalizedString(33787);
            break;
          case TacticsType.Limber:
            iconSrc = tacticsLimberIconSrc;
            displayName = await this.stringTableService.getLocalizedString(65668);
            rolloverText = await this.stringTableService.getLocalizedString(42222);
            break;
        }
        return {
          iconSrc: iconSrc,
          amount: 0,
          maxCount: 0,
          foodCost: 0,
          woodCost: 0,
          coinCost: 0,
          influenceCost: 0,
          shipmentCost: 0,
          displayName: displayName,
          techName: '',
          rolloverText: rolloverText,
          details: [],
          pop: 0,
          index: -1,
          age: 0,
          buildingIndex: -1,
          isSelected: false,
        };
      }
    }

    return null;
  }

  private findHealRange(tacticsArray: TacticsAction[]): number {
    for (let tactic of tacticsArray) {
      if (tactic.type == 'Heal') {
        return Number(tactic.maxrange);
      }
    }
    return 0;
  }

  private needToShowAttack(attack: ProtoactionElement): boolean {
    return attack.name != 'HandAttackCrate' &&
      attack.name != 'RangedAttackContained' &&
      attack.name != 'LanceHandAttack' &&
      attack.name != 'LanceHandAttack' &&
      attack.name != 'CrateGather' &&
      attack.name != 'CaseShotAttack' &&
      attack.name != 'MortarAttackContained' &&
      attack.name != 'RangedBuildingAttack' &&
      attack.name != 'ChargeCarbineAttack' &&
      attack.name != 'ChargePistolAttack' &&
      attack.type != 'AutoGather' &&
      attack.active != '0';
  }

  private async getAvailableTechsForUnit(unit: Unit): Promise<Card[]> {
    let cards: Card[] = [];
    for (let building of this.homeCity.homecity.building) {
      if (!Object(building.activetechs).tech) continue;
      let activeTechs: HomecityTech[] = Object(building.activetechs).tech;
      for (let activeTech of activeTechs) {
        let cardInfo: PurpleCard | null = null;
        let tech: backend.ITechInfo = await getTechByName(this.techTreeService, activeTech['#text']);
        if (!tech) continue;
        if (!isTechAppliedToUnit(tech, unit)) continue;
        for (cardInfo of this.homeCity.homecity.cards.card) {
          if (cardInfo.name == tech.name) {
            break;
          }
        }
        if (!cardInfo) continue;
        if (!tech) continue;
        let amount = Number(cardInfo.displayunitcount);
        let maxCount = Number(cardInfo.maxcount);
        let age: number = Number(cardInfo.age);
        let card = await getCardFromTech(this.stringTableService, this.techTreeService, tech, this.selectedCiv, this.jsonService, amount, maxCount, age);
        if (!card) continue;
        if (card.iconSrc.endsWith('undefined')) continue;
        cards.push(card);
      }
    }
    return cards;
  }

  private async getLocalizedUnitType(unitType: UnitType): Promise<string> {
    switch (unitType) {
      case UnitType.Military:
        return this.stringTableService.getLocalizedString(19038);
      case UnitType.Building:
        return this.stringTableService.getLocalizedString(19159);
    }
  }

  private stringToUnitType(unitTypeString: string): UnitType {
    switch (unitTypeString) {
      case UnitType.Military:
        return unitTypeString;
      case UnitType.Building:
        return unitTypeString;
      default:
        return UnitType.Military;
    }
  }

  private async getShadowTechsFromAgeTech(ageTechName: string, unit: Unit): Promise<Card[]> {
    let ageShadowTechs: Card[] = [];
    let ageTech = await getTechByName(this.techTreeService, ageTechName)!;
    if (ageTech.effects) {
      for (let effect of ageTech.effects) {
        if (effect.type == 'TechStatus') {
          if (effect.status == backend.TechStatus.Active) {
            let subTech = await getTechByName(this.techTreeService, effect.text!);
            if (!isTechAppliedToUnit(subTech, unit)) continue;
            let card = await getCardFromTech(this.stringTableService, this.techTreeService, subTech, this.selectedCiv, this.jsonService);
            if (card) {
              ageShadowTechs.push(card);
            }
          }
        }
      }
    }
    if (isTechAppliedToUnit(ageTech, unit)) {
      let card = await getCardFromTech(this.stringTableService, this.techTreeService, ageTech, this.selectedCiv, this.jsonService);
      if (card) {
        ageShadowTechs.push(card);
      }
    }
    return ageShadowTechs;
  }
}
