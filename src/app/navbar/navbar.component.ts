import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { User } from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginStatus: Observable<boolean>;
  name: Observable<string>;
  constructor(public af: AuthService) {

  }


  ngOnInit() {
    this.loginStatus = this.af.loginStatus;
    this.name = this.af.name;
    }
}
