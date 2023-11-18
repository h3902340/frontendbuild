import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { foodIconSrc, woodIconSrc, goldIconSrc, influenceIconSrc, houseIconSrc, hpIconSrc, losIconSrc, rangeIconSrc, rofIconSrc, speedIconSrc, damageAreaIconSrc, armorRangedIconSrc, armorSiegeIconSrc, age1IconSrc, age2IconSrc, age3IconSrc, age4IconSrc, age2ButtonSrc, age3ButtonSrc, age4ButtonSrc, age5ButtonSrc, artRoot } from 'src/app/constant';
import { DeckBuilderCardComponent } from '../../tools/deck-builder-card/deck-builder-card.component';
import { UnitInfo, TacticsType, PostureInfo, AttachmentInfo } from '../data-structures';
import { Card, importAttachment } from 'src/app/utility';
import { UnitViewerComponent } from '../unit-viewer/unit-viewer.component';
import { JsonService } from 'src/app/services/json.service';
import { StrTableService } from 'src/app/services/string-table.service';

@Component({
  selector: 'app-unit-entry',
  templateUrl: './unit-entry.component.html',
  styleUrls: ['./unit-entry.component.css']
})
export class UnitEntryComponent implements OnInit, AfterViewInit {
  @Input()
  public unit: UnitInfo;
  @Input()
  public timeHeading: string;

  @ViewChildren('tabs')
  private tabs: QueryList<ElementRef>;

  @ViewChildren('tabcontents')
  private tabcontents: QueryList<ElementRef>;

  public foodSrc = foodIconSrc;
  public woodSrc = woodIconSrc;
  public goldSrc = goldIconSrc;
  public influenceSrc = influenceIconSrc;
  public houseSrc = houseIconSrc;

  public hpSrc = hpIconSrc;
  public speedSrc = speedIconSrc;
  public losSrc = losIconSrc;
  public rangeSrc = rangeIconSrc;
  public rofSrc = rofIconSrc;
  public damageAreaSrc = damageAreaIconSrc;
  public currentSpeed: number = 0;
  public isCoverMode: boolean;
  public armorRangedSrc = armorRangedIconSrc;
  public armorSiegeSrc = armorSiegeIconSrc;

  public age1Icon = age1IconSrc;
  public age2Icon = age2IconSrc;
  public age3Icon = age3IconSrc;
  public age4Icon = age4IconSrc;

  public age2ButtonIcon = age2ButtonSrc;
  public age3ButtonIcon = age3ButtonSrc;
  public age4ButtonIcon = age4ButtonSrc;
  public age5ButtonIcon = age5ButtonSrc;

  public avatarCard: Card;

  public modelPath: string;
  public attachments: AttachmentInfo[];

  public selectedAnimation: string;
  public currentPosture: PostureInfo;

  @ViewChildren('postures')
  private postures: QueryList<DeckBuilderCardComponent>;

  @ViewChild('viewer')
  private viewer: UnitViewerComponent;

  private activeTechs: string[] = [];

  public healRangeText: string;
  public animText: string;

  constructor(private stringTableService: StrTableService, private jsonService: JsonService) { };

  public async ngOnInit() {
    this.isCoverMode = false;
    if (this.unit.postures.length > 0) {
      if (this.unit.postures[0].tactics == TacticsType.Stealth) {
        this.changeAttackLineDisplay(this.unit.postures[1].tactics);
        this.currentSpeed = (Math.round(this.unit.speed * this.unit.postures[1].speedMultiplier * 100) * .01);
      } else {
        this.changeAttackLineDisplay(this.unit.postures[0].tactics);
        this.currentSpeed = (Math.round(this.unit.speed * this.unit.postures[0].speedMultiplier * 100) * .01);
      }
    } else {
      this.currentSpeed = this.unit.speed;
    }
    let details: { text: string, pop: number }[] = [];
    if (this.unit.trainTime > 0) {
      details.push({
        text: `${this.timeHeading}${this.unit.trainTime.toString()}`,
        pop: 0
      })
    }
    if (this.unit.buildBounty) {
      details.push({
        text: (await this.stringTableService.getLocalizedString(34048)).replace('%d', this.unit.buildBounty.toString()),
        pop: 0
      })
    }
    if (this.unit.killBounty) {
      details.push({
        text: (await this.stringTableService.getLocalizedString(29781)).replace('%d', this.unit.killBounty.toString()),
        pop: 0
      })
    }
    details.push({
      text: `${await this.stringTableService.getLocalizedString(69635)}${this.unit.types}`,
      pop: 0
    })
    this.avatarCard = {
      iconSrc: this.unit.src,
      amount: 0,
      maxCount: 0,
      foodCost: 0,
      woodCost: 0,
      coinCost: 0,
      influenceCost: 0,
      shipmentCost: 0,
      displayName: this.unit.name,
      techName: '',
      rolloverText: this.unit.rolloverText,
      pop: 0,
      index: -1,
      age: -1,
      buildingIndex: -1,
      isSelected: false,
      details: details,
    }
    this.changeModels('none');
    this.currentPosture = this.unit.postures[0];
    this.healRangeText = await this.stringTableService.getLocalizedString(101168);
    this.animText = await this.stringTableService.getLocalizedString(22360);
  }

  public ngAfterViewInit(): void {
    if (this.tabs.length > 0) {
      this.selectUpgradeTab(0);
    }
    this.viewer.startingAnimation = this.unit.postures[0].anims[0];
  }

  public onTacticsClicked(event: DeckBuilderCardComponent, posture: PostureInfo): void {
    for (let postureTemp of this.postures) {
      let orginalSrc: string = postureTemp.getIconSrc();
      postureTemp.setIconSrc(orginalSrc.replace('cur', 'avl'));
    }
    let orginalSrc = event.getIconSrc()!;
    event.setIconSrc(orginalSrc.replace('avl', 'cur'));
    this.changeAttackLineDisplay(posture.tactics);
    this.currentSpeed = (Math.round(this.unit.speed * posture.speedMultiplier * 100) * .01);
    this.isCoverMode = posture.tactics == TacticsType.Cover;
    this.selectedAnimation = posture.anims[0];
    this.viewer.playAnimation(this.selectedAnimation);
    this.currentPosture = posture;
  }

  private changeAttackLineDisplay(tactics: TacticsType): void {
    let targetTactics: TacticsType = TacticsType.None;
    if (tactics == TacticsType.StandGround) {
      targetTactics = TacticsType.Defend;
    } else {
      targetTactics = tactics;
    }
    for (let i = 0; i < this.unit.attackInfos.length; i++) {
      let attackInfo = this.unit.attackInfos[i];
      if (tactics == TacticsType.None) {
        attackInfo.hidden = false;
        continue;
      }
      // don't show dubplicate
      let isDubplicate: boolean = false;
      for (let j = 0; j < i; j++) {
        if (this.unit.attackInfos[j].name == attackInfo.name && !this.unit.attackInfos[j].hidden) {
          attackInfo.hidden = true;
          isDubplicate = true;
          break;
        }
      }
      if (isDubplicate) {
        continue;
      }
      if (attackInfo.actionKey.includes('Building')) {
        if (targetTactics == TacticsType.Cover) {
          if (attackInfo.actionKey.includes(TacticsType.Cover)) {
            attackInfo.hidden = false;
          } else {
            attackInfo.hidden = true;
          }
        } else {
          if (attackInfo.actionKey.includes(TacticsType.Cover)) {
            attackInfo.hidden = true;
          } else {
            attackInfo.hidden = false;
          }
        }
        continue;
      }
      if (attackInfo.actionKey.includes(targetTactics)) {
        attackInfo.hidden = false;
        continue;
      }
      if (targetTactics != TacticsType.Cover) {
        if (attackInfo.actionKey == 'HandAttack') {
          attackInfo.hidden = false;
          continue;
        }
      }
      if (attackInfo.actionKey == 'VolleyRangedAttack' && targetTactics != TacticsType.Volley && targetTactics != TacticsType.Melee && this.unit.protoKey == 'Explorer') {
        attackInfo.hidden = false;
        continue;
      }
      if (!attackInfo.actionKey.includes(TacticsType.Volley) &&
        !attackInfo.actionKey.includes(TacticsType.Stagger) &&
        !attackInfo.actionKey.includes(TacticsType.Melee) &&
        !attackInfo.actionKey.includes(TacticsType.Cover) &&
        !attackInfo.actionKey.includes(TacticsType.Trample) &&
        !attackInfo.actionKey.includes(TacticsType.Defend)) {
        attackInfo.hidden = false;
        continue;
      }
      attackInfo.hidden = true;
    }
  }

  public selectUpgradeTab(index: number) {
    for (let i = 0; i < this.tabcontents.length; i++) {
      this.tabcontents.get(i)!.nativeElement.style.display = 'none';
    }
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs.get(i)!.nativeElement.classList.remove("active");
      if (i == index) {
        //this.currentAgeTab = i;
      }
    }
    this.tabcontents.get(index)!.nativeElement.style.display = 'block';
    this.tabs.get(index)!.nativeElement.classList.add("active");
    //this.saveDeckToLocal();
  }

  public onUpgradeClicked(card: Card): void {
    if (card.isSelected) {
      card.isSelected = false;
      this.activeTechs.splice(this.activeTechs.indexOf(card.techName), 1);
      if (this.activeTechs.length == 0) {
        this.changeModels('none');
      } else {
        this.changeModels(this.activeTechs[this.activeTechs.length - 1]);
      }
      return;
    }
    card.isSelected = true;
    this.changeModels(card.techName);
    this.activeTechs.push(card.techName);
  }

  private async changeModels(techName: string) {
    let techNameLowercase = techName.toLocaleLowerCase();
    let logic = this.unit.animFileInfo.animfile.component.logic[techNameLowercase];
    if (logic) {
      this.modelPath = artRoot + logic.assetreference.file + '.glb';
      this.attachments = [];
      let attachKey = logic.attach['@a'];
      for (let attachment of this.unit.animFileInfo.animfile.attachment) {
        if (attachment['#text'] == attachKey) {
          if (Object(attachment.component).assetreference) {
            let toBone = logic.attach['@tobone'];
            toBone = toBone.replaceAll(' ', '_');
            let fromBone = logic.attach['@frombone'];
            this.attachments.push({
              modelPath: artRoot + Object(attachment.component).assetreference.file + '.glb',
              toBone: toBone,
              fromBone: fromBone,
              syncanims: logic.attach['@syncanims'] == '1',
            });
          }
        }
      }
      attachKey = this.unit.animFileInfo.animfile.component.attach['@a'];
      for (let attachment of this.unit.animFileInfo.animfile.attachment) {
        if (attachment['#text'] == attachKey) {
          let attachmentInfo = await importAttachment(artRoot + attachment.include + '.json', this.jsonService);
          let toBone = this.unit.animFileInfo.animfile.component.attach['@tobone'];
          toBone = `Bip01_${toBone[0].toUpperCase()}${toBone.substring(1).toLowerCase()}`;
          let fromBone = this.unit.animFileInfo.animfile.component.attach['@frombone'];
          this.attachments.push({
            modelPath: artRoot + attachmentInfo.animfile.component.assetreference.file + '.glb',
            toBone: toBone,
            fromBone: fromBone,
            syncanims: this.unit.animFileInfo.animfile.component.attach['@syncanims'] == '1',
          });
        }
      }
    }
  }

  public onSelectAnimation(event: any): void {
    this.selectedAnimation = event.target.value;
    this.viewer.playAnimation(this.selectedAnimation);
  }
}
