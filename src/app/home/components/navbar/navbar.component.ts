import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from 'src/app/ui-services/theme.service';
import { UserLoginComponent } from '../user-login/user-login.component';
import { Data } from 'src/types/examify-interface';
import { UserService } from 'src/app/backend-services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  user: Data.User | undefined;
  centered: any;
  isDarkMode: boolean = false;
  constructor(
    private router: Router,
    public themeService: ThemeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeService.getDarkTheme;
    this.isLoggedIn = this.userService.isLoggedIn();
    this.user = this.userService.getUser();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.getDarkTheme;
  }

  public logout() {
    this.userService.logout();
    window.location.reload();
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
