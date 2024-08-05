import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service.ts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  constructor(private location: Location, private authService: AuthService) { }

  goBack() {
    this.location.back();
  }

  logout() {
    this.authService.logout();
  }
  
}
