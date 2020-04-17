import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  name: string;
  constructor(public tbd: AuthService) { }

  ngOnInit() {
    this.tbd.getUser();
    this.name = this.tbd.userData.displayName? this.tbd.userData.displayName : "profile"
    // this.name = AuthService.userData;
  }
}
