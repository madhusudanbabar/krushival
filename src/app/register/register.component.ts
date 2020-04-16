import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './firebase-ui-auth.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // logout(){
  // firebase.auth().signOut().then(function(){
  //   console.log("logged out");
  //   this.router.Navigate("home.html");
  // }, function (err) {
  //   console.log("error");
  // })
}
