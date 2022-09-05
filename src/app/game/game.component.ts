import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { MatchFormComponent } from '../components/match-form/match-form.component';
import { UserFormComponent } from '../components/user-form/user-form.component';
import { MatchData } from '../models/match-data';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public user:any;
  public matches:any;
  public userMatch:any;

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    let auth = this.authService.getAuth();
    this.user = auth.currentUser;
    if(!this.user.displayName) this.openUserDialog();
    this.getMatches();
  }

  getMatches() {
    this.firebaseService.getMatches().subscribe(
      (matches:any)=>{
        this.userMatch = matches.find((match:any)=> match.creator === this.user.uid);
        this.matches = matches.filter((match:any)=> match.open && match.creator != this.userMatch);
      }
    );
  }

  logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

  openMatchDialog() {
    if(!this.userMatch) this.userMatch = new MatchData(this.user.uid,'',"normal",0,false,false);
    const dialogRef = this.dialog.open(MatchFormComponent, { data: {match:this.userMatch, matches:this.matches} });

    dialogRef.afterClosed().subscribe(result => {
      this.firebaseService.addMatch(result,this.userMatch);
    });
  }
  openUserDialog() {
    const dialogRef = this.dialog.open(UserFormComponent, { data: this.user });

    dialogRef.afterClosed().subscribe(result => {
      if(result?.pseudo) this.authService.updateUser(result.pseudo);
    });
  }
}
