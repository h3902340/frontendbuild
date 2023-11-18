import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-button-dialog',
  templateUrl: './add-button-dialog.component.html',
  styleUrls: ['./add-button-dialog.component.css']
})
export class AddButtonDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { label: string }) { }

  toUppercase() {
    this.data.label = this.data.label.toUpperCase();
}
}
