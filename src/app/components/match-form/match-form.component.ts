import { Component, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatchData } from '../../models/match-data';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})

export class MatchFormComponent {

  public match:any;
  public matches:any;
  public editMarch:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<MatchFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.match = JSON.parse(JSON.stringify(data.match));
    this.matches = data.matches.filter((match:any)=> match.matchID != this.match.matchID);
    this.editMarch = data.match.name.length > 0;
  }

  createMatch() {
    this.dialogRef.close(this.match);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
