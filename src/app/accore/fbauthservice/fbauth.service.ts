import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class FbauthService {

  constructor(public afAuth: AngularFireAuth) { }

  resetPassword(email: string) {
    const fbAuth = auth();
    return fbAuth.sendPasswordResetEmail(email);
  }

}
