import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: any;
  name: any;
  constructor(private af:AuthService ) {
  this.user = af.userInfo;
 }

  ngOnInit() {
  }
}
