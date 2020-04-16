import { Injectable } from '@angular/core';
import { User } from '../services/user';
import { auth } from 'firebase/app';
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFireDatabase } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  userData: string; // Save logged in user data
  user: any;
  constructor(public afAuth: AngularFireAuth){
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.userData = this.afAuth.user;
    console.log(this.userData);
    // .subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // })
  }


  // // Returns true when user is looged in and email is verified
  // get isLoggedIn(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return (user !== null && user.emailVerified !== false) ? true : false;
  // }

  //
  // // Sign out
  // SignOut() {
  //   return this.afAuth.signOut().then(() => {
  //     localStorage.removeItem('user');
  //     this.router.navigate(['register']);
  //   })
  // }
}
