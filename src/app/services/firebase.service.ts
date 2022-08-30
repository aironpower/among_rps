import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';

const getObservable = (collection: AngularFirestoreCollection<Task>) => {
  const subject = new BehaviorSubject<Task[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: Task[]) => {
    subject.next(val);
  });
  return subject;
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  players = getObservable(this.store.collection('players')) as Observable<Task[]>;
  matches = getObservable(this.store.collection('inProgress')) as Observable<Task[]>;

  constructor(private store: AngularFirestore) { }
}