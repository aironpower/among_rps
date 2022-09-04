import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private matches:any;
  private matchCollection:AngularFirestoreCollection<any>;

  constructor(firestore: AngularFirestore) {
    this.matchCollection = firestore.collection('matches');
    this.matches = this.matchCollection.valueChanges({ idField: 'matchID' });
  }

  getMatches() {
    return this.matches;
  }

  addMatch(match:any, userMatch:any) {
    if(userMatch) this.matchCollection.doc(userMatch.matchID).set(match);
    else this.matchCollection.add(match);
  }
}