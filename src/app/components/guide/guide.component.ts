import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { idCivToFlagCircle, idCivToFlagLeft, idCivToName, ladderCivs } from 'src/app/constant';
import { AddButtonDialogComponent } from '../editable/add-button-dialog/add-button-dialog.component';
import { EditorService, EditorContents, guideBuild } from 'src/app/services/editor.service';
import { DeleteDialogComponent } from '../editable/delete-dialog/delete-dialog.component';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
  editMode: boolean = false;
  public civs: number[];
  items: any[];
  selectedItem: any;
  selectedCivId: number;
  selectedBO: number | null = null;
  buttonsBOList: { id: number, label: string }[] = [];
  editorContents: EditorContents = {
    overview: '',
    bonus: '',
    notes: '',
    buildOrders: {},
    decks: {},
    matchups: {}
  };
  currentIndex = 0;
  currentDeckContent: string = '';
  currentBuildOrderContent: string = '';
  currentBuildOrderId: number | null = null;
  currentMatchupContent: string = '';
  selectedCivMatchup: number | null = null;
  selectedCivMatchupName: string;
  currentYoutubeContent: string | null = null;

  constructor(private dialog: MatDialog, private editorService: EditorService, private authService: AuthService) { }

  onEditorContentChanged(id: string, newContent: string) {
    let keyToUpdate: string = '';

    if (id.startsWith('buildOrder')) {
      this.editorContents.buildOrders[id] = newContent;
      this.currentBuildOrderContent = newContent;
      keyToUpdate = id;
    } else if (id.startsWith('decks')) {
      this.editorContents.decks[id] = newContent;
      this.currentDeckContent= newContent; 
      keyToUpdate = id;
    } else if (id.startsWith('matchup')) {
      this.editorContents.matchups[id] = newContent;
      this.currentMatchupContent = newContent;
      keyToUpdate = id;
    } else if (id in this.editorContents) {
      this.editorContents[id] = newContent;
      keyToUpdate = id;
    }

    this.editorService.saveEditorContent(this.selectedCivId, keyToUpdate, JSON.stringify(newContent)).subscribe(response => {
      console.log("Content saved!", response);
    });
  }

  panelStates = {
    overview: false,
    bonus: false,
    notes: false,
    buildorder: false,
    matchup: false
  };

  ngOnInit() {
    this.civs = ladderCivs;

    const storedCivId = localStorage.getItem('guide_selectedCivId');
    const storedPanelStates = localStorage.getItem('guide_panelStates');
    if (storedCivId) {
      this.selectedCivId = +storedCivId;
    }
    if (storedPanelStates) {
      this.panelStates = JSON.parse(storedPanelStates);
    }

    this.getEditorContents();
    this.getYoutubeContents();
  }


  getEditorContents() {
    this.currentBuildOrderContent = ''
    this.editorService.loadEditorContent(this.selectedCivId).subscribe(contents => {
      this.editorContents = {
        overview: '',
        bonus: '',
        notes: '',
        buildOrders: {},
        decks: {},
        matchups: {}
      };
      if (contents && Array.isArray(contents)) {
        contents.forEach(item => {
          if (['overview', 'bonus', 'notes'].includes(item.key)) {
            this.editorContents[item.key] = JSON.parse(item.content);
          }
          else if (item.key.startsWith('buildOrder')) {
            this.editorContents.buildOrders[item.key] = JSON.parse(item.content);
          }
          else if (item.key.startsWith('decks')) {
            this.editorContents.decks[item.key] = JSON.parse(item.content);
          }
          else if (item.key.startsWith('matchup')) {
            this.editorContents.matchups[item.key] = JSON.parse(item.content);
          }

        });

      }
      this.getGuideBuild();
    });

  }

  getGuideBuild() {
    this.buttonsBOList = [];
    this.currentBuildOrderId = null;
    this.editorService.getGuidebuild(this.selectedCivId).subscribe({
      next: this.handleResponseBuild.bind(this),
      error: this.handleErrorBuild.bind(this)
    });
  }

  private handleResponseBuild(response: guideBuild[]): void {

    response.forEach(value => {
      this.buttonsBOList.push({ id: value.id, label: value.title })
    })
    if (this.buttonsBOList.length > 0) {
      this.currentBuildOrderId = this.buttonsBOList[0].id;
      this.selectedBO = this.currentBuildOrderId;
      this.currentBuildOrderContent = this.editorContents.buildOrders[`buildOrder${this.currentBuildOrderId}`] || '';
      this.currentDeckContent = this.editorContents.decks[`decks${this.buttonsBOList[this.currentIndex].id}`] || '';
    } 
  }
  private handleErrorBuild(event: Event): void {
    console.error('error in get guide build request');
  }

  
  getYoutubeContents() {
    this.currentYoutubeContent = '';
    this.editorService.loadYoutube(this.selectedCivId).subscribe(contents => {
      this.currentYoutubeContent = contents ;
    }) 

      }
  getNameCiv(idciv: number) {
    return idCivToName(idciv);
  }

  getLeftFlag() {
    return idCivToFlagLeft(this.selectedCivId);
  }
  getCircleFlag(matchup_civ: number) {
    return idCivToFlagCircle(matchup_civ);
  }
  setPanelState(panel: 'overview' | 'bonus' | 'notes' | 'buildorder' | 'matchup', isOpen: boolean) {
    this.panelStates[panel] = isOpen;
    localStorage.setItem('guide_panelStates', JSON.stringify(this.panelStates));
  }
  updateSelectedCivId() {
    localStorage.setItem('guide_selectedCivId', this.selectedCivId.toString());
    this.getEditorContents();
    this.getYoutubeContents();
  }


  changeContent(button: { id: number, label: string }, event: Event) {
    if (this.selectedBO === button.id) {
      this.selectedBO = null;
      this.panelStates.buildorder = false;
    } else {
      this.selectedBO = button.id;
      this.panelStates.buildorder = true;
    }
    event.stopPropagation();
    this.currentBuildOrderId = button.id;
    this.currentBuildOrderContent = this.editorContents.buildOrders[`buildOrder${this.currentBuildOrderId}`] || '';

  }
  youtubeContentChanged(youtubeLinks: string[]) {

    const jsonString: string = JSON.stringify(youtubeLinks);
    this.editorService.saveYoutubeContent(this.selectedCivId, jsonString).subscribe(response => {
      console.log("Content saved!", response);
    });
  }

  setselectedCivMatchup(civ: number, event: Event): void {
    if (this.selectedCivMatchup === civ) {
      this.selectedCivMatchup = null;
      this.panelStates.matchup = false;
    } else {
      this.selectedCivMatchup = civ;
      this.panelStates.matchup = true;
    }
    event.stopPropagation();
    if (this.editorContents.matchups && this.selectedCivMatchup !== null) {
      this.currentMatchupContent = this.editorContents.matchups[`matchup${this.selectedCivMatchup}`] || '';
    }
  }
  addButton() {
    const dialogRef = this.dialog.open(AddButtonDialogComponent, {
      data: { label: '' }
    });

    dialogRef.afterClosed().subscribe(label => {
      if (label) {
        this.editorService.createguidebuild(this.selectedCivId, label).subscribe(response => {
          this.buttonsBOList.push({ id: response.id, label: response.title });
          this.currentBuildOrderId = response.id;
          this.selectedBO = this.currentBuildOrderId;
          this.currentBuildOrderContent = '';
        });

      }
    });
  }


  deleteButton(button: { id: number, label: string }) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: { label: button.label }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.buttonsBOList.findIndex(b => b.id === button.id);
        if (index !== -1) {
          console.log(button.id)
          this.editorService.deleteGuideBuild(button.id);
          this.buttonsBOList.splice(index, 1);
          // Ici, vous pouvez également faire appel à un service pour supprimer le bouton côté serveur.
        }
      }
    });
  }

  move(direction: number): void {
    this.currentIndex += direction;
    if (this.currentIndex < 0) {
      this.currentIndex = this.buttonsBOList.length - 1;
    } else if (this.currentIndex >= this.buttonsBOList.length) {
      this.currentIndex = 0;
    }
    console.log(this.currentIndex)
    console.log(this.buttonsBOList[this.currentIndex])
    this.currentDeckContent = this.editorContents.decks[`decks${this.buttonsBOList[this.currentIndex].id}`] || '';
  }
}
