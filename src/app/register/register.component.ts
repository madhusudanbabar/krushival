import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
  firebase.auth().signOut().then(function(){
    console.log("logged out");
    window.location = "home.html"
  }, function (err) {
    console.log("error");
  })
}

}
