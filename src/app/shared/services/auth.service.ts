import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  uname: string;
  constructor(public af: AngularFireAuth) {
  this.userData = this.af.user;
 }

 getUser(){
   return this.userData.displayName;
 }

  login() {
    this.af.signInWithPopup(new auth.GoogleAuthProvider()).then(success=>{
      localStorage.setItem("user", this.userData.displayName);  
    }).catch(err=>{
      console.log(9);
    });
  }
  logout() {
    this.af.signOut();
    localStorage.removeItem("user");
  }
}
