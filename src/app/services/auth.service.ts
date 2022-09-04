
import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
  getAuth
} from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { LoginData } from '../models/login-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user:any;

  constructor(private auth: Auth) {
    let autho = getAuth();
    this.user = autho.currentUser;
  }

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  getAuth() {
    return getAuth();
  }

  updateUser(userName: string) {
    const auth = getAuth();
    updateProfile(this.user, { displayName: userName }).then(() => {
      console.log("User Updated")
    }).catch((error) => console.log(error)); 
  }
}