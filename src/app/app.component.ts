import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { KeycloakProfile } from 'keycloak-js';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saas-shop-admin-accountant';
  faBars = faBars;
  faUserGroup = faUserGroup;

  constructor(private authService: AuthService) {}

  public loggedIn: boolean = false;
  public userProfile: KeycloakProfile = {};

  async ngOnInit(): Promise<void> {
    this.loggedIn = await this.authService.isLoggedIn();
    if (this.loggedIn) {
        this.userProfile = await this.authService.loadUserProfile();
    }
  }

  public login(): void {
    this.authService.login();
  }

  public logout(): void {
    this.authService.logout();
  }
}