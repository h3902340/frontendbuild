import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})

export class EditorComponent {
  rawContent: string = '';


  constructor(private sanitizer: DomSanitizer) { }
  isEditing = false;
  @Output() contentChanged = new EventEmitter<string>();
  @Input() content: string;
  @Input() editMode: boolean;

  get safeContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.rawContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges')
    if ('content' in changes ) {
      console.log('ngOnChanges1')
      console.log(changes['content'].currentValue)
      this.rawContent = changes['content'].currentValue;
    }
  }

  saveChanges() {
    this.contentChanged.emit(this.rawContent);
    this.isEditing = false;
  }

  startEditing() {
    console.log(this.rawContent)
    this.isEditing = true;
  }


  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };
};

