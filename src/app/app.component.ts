import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
    private _dialog: MatDialog,
    private _firebase: FirebaseService
  ) {}
}