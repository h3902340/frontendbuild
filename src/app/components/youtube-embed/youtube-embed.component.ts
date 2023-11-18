import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-youtube-embed',
  templateUrl: './youtube-embed.component.html',
  styleUrls: ['./youtube-embed.component.css']
})
export class YoutubeEmbedComponent {
  youtubeLinks: string[] = [];
  editTable: boolean[] = [];  // Pour suivre le mode édition pour chaque lien
  @Input() editMode: boolean;
  @Input() content :string | null;
  @Output() contentChanged = new EventEmitter<string[]>();

  ngOnChanges(changes: SimpleChanges) {
    if ('content' in changes && changes['content'].currentValue) {
      this.youtubeLinks = changes['content'].currentValue;
    } else {
      this.youtubeLinks = [];
    }
  }

  
  addLink() {
    this.youtubeLinks.push('');
    this.editTable.push(true);  // Quand un nouveau lien est ajouté, il est directement en mode édition
  }

  // Activer le mode édition
  enableEditMode(index: number) {
    this.editTable[index] = true;
  }

  // Valider le lien saisi
  validateLink(index: number) {
    this.editTable[index] = false;  // Quitter le mode édition après validation
    this.contentChanged.emit(this.youtubeLinks);

  }

  deleteLink(index: number) {
    this.youtubeLinks.splice(index, 1);
    this.editTable.splice(index, 1);  // Supprimez aussi l'état d'édition correspondant
    this.contentChanged.emit(this.youtubeLinks);
  }
}
