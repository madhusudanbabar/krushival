import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  name: string;
  constructor(public tbd: AuthService) { this.name = tbd.userData }

  ngOnInit() {
    // this.name = AuthService.userData;
  }
}
