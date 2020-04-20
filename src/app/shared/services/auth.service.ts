import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: firebase.User;
  public loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  public name = new BehaviorSubject(localStorage.getItem("name"));

  checkLoginStatus(): boolean{
    if(this.af.authState !== null){
      return true;
    }
    else{
      return false;
    }
  }

  constructor(private af: AngularFireAuth, router: Router) {
        af.authState.subscribe(user=>{
          this.userInfo = user;
          localStorage.setItem("name", user.displayName);
      });
  }

  login(){
    this.af.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(u=>{
      window.alert("login successful" +this.userInfo.displayName);
    }).catch(error=>{
      window.alert(error.message);
    })
  }

  logout(){
    this.af.signOut().then(function(){
      localStorage.removeItem("name");
      this.router.navigate(['home']);
    }).catch(function(){
      window.alert("error! failed to logout");
    })
  }
}
