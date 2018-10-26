import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class FbauthService {

  constructor(public afAuth: AngularFireAuth) { }

  resetPassword(email: string) {
    //const fbAuth = auth();
    return this.afAuth.auth.sendPasswordResetEmail(email);
    //return fbAuth.sendPasswordResetEmail(email);
  }
}