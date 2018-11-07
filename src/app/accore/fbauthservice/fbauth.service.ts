import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class FbauthService {

  firebase_user: firebase.User;
  idToken: string;
  tknclaims: any;


  constructor(public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe(
      user => {
                console.log('auth state resolved');
                this.update_auth_sate(user);
              },
      err =>  {
                console.log('error in resolving auth state');
              }
      );

  }

  update_auth_sate(user) {
    console.log(user);
    this.firebase_user = user;
    console.log(typeof(user));
    if (this.firebase_user) {
      console.log(this.firebase_user.uid);
      this.refresh_id_token()
      .then(idToken => {
        console.log(idToken);
        this.idToken = idToken;
        this.set_id_tkn_result1();
      }).catch(function(error) {
        // Handle error
        console.log('error inside get id token');
        this.idToken = '';
      });      
    } else {
      console.log('inside else of auth');
    }
  }


  async refresh_id_token() {
    return await this.afAuth.auth.currentUser.getIdToken(/* forceRefresh */ false);
  }

  set_id_tkn_result1() {
  this.get_id_tkn_result()
  .then((idTokenResult) => {
    // Confirm the user is an Investor.
    console.log('inside if then after f1');
    console.log(idTokenResult.claims.custtype);
    this.tknclaims = idTokenResult.claims;
    console.log(this.tknclaims);
    })
  .catch((error) => {
    console.log(error);
    });
  }

  async get_id_tkn_result() {
    return await this.afAuth.auth.currentUser.getIdTokenResult(true);
  }


  resetPassword(email: string) {
    //const fbAuth = auth();
    return this.afAuth.auth.sendPasswordResetEmail(email);
    //return fbAuth.sendPasswordResetEmail(email);
  }

  singin_with_cust_tkn(token: string) {
    return this.afAuth.auth.signInWithCustomToken(token);
  }


}