import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  noUserName:boolean = false;
  user:any;

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.user = {
      pseudo: data.displayName,
      email: data.email
    };
    this.dialogRef.disableClose = !this.user.pseudo?.length;
  }

  ngOnInit(): void {
  }

  updateUser() {
    this.dialogRef.close(this.user);
  }

  onNoClick(): void {
    if(this.user.pseudo?.length) this.dialogRef.close();
  }

}
