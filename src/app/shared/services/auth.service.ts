import { Injectable } from '@angular/core';
import { User } from '../services/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  userData: any; // Save logged in user data

  constructor(private db: AngularFireDatabase){
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }


  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }


  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  // getUserData(user) {
  //   // const userRef: this.afAuth.;
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified
  //   }
  //   return userRef.set(userData, {
  //     merge: true
  //   })
  // }


  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     window.user = user;
  //     console.log("user in \n" +window.user.displayName);
  //     // User is signed in.
  //     displayName = user.displayName;
  //     email = user.email;
  //     emailVerified = user.emailVerified;
  //     photoURL = user.photoURL;
  //     var uid = user.uid;
  //     phoneNumber = user.phoneNumber;
  //     var providerData = user.providerData;
  //     user.getIdToken().then(function(accessToken) {
  //       console.log(displayName +" is logged in");
  //       document.getElementById('username').innerHTML = '<span class="glyphicon glyphicon-user"></span>' +" " +displayName;
  //       document.getElementById('sign').innerHTML = '<span class="glyphicon glyphicon-log-in"></span> Logout';
  //       document.getElementById('sign').setAttribute("onclick", "logout()");
  //       // console.log(JSON.stringify({
  //       //   displayName: displayName,
  //       //   email: email,
  //       //   emailVerified: emailVerified,
  //       //   phoneNumber: phoneNumber,
  //       //   photoURL: photoURL,
  //       //   uid: uid,
  //       //   accessToken: accessToken,
  //       //   providerData: providerData
  //       // }, null, '  '));
  //     });
  //   } else {
  //     console.log(window.location);
  //     url = window.location.href;
  //     if (url.includes("dashboard")) {
  //       alert("protected data! please log in to continue");
  //       window.location = "register.html";
  //     }
  //
  //     // User is signed out.
  //     document.getElementById('sign').innerHTML = '<span class="glyphicon glyphicon-log-in"></span> Sign Up';
  //   }
  // }, function(error) {
  //   console.log(error);
  // });
  //

  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }

}
