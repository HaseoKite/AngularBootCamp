import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})
export class MaterialComponent {
  name: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogName, {
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(name => {
      this.name = name;
    });
  }
}

@Component({
  selector: 'dialog-name',
  templateUrl: 'dialog-name.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule
  ]
})
export class DialogName {
  constructor(
    public dialogRef: MatDialogRef<DialogName>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}