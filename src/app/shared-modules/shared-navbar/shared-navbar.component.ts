import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/backend-services/user-service/user.service';
import { SidebarCollapseService } from 'src/app/ui-services/side-bar-service/sidenar-collapse.service';
import { ThemeService } from 'src/app/ui-services/theme.service';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-shared-navbar',
  templateUrl: './shared-navbar.component.html',
  styleUrl: './shared-navbar.component.scss',
})
export class SharedNavbarComponent implements OnInit {
  isSidebarExpanded: boolean = true;
  isDarkMode: boolean = false;
  user!: Data.User;
  constructor(
    private sidebarService: SidebarCollapseService,
    private userService: UserService,
    private router: Router,
    public themeService: ThemeService
  ) {
    this.sidebarService.isExpanded$.subscribe((isExpanded: boolean) => {
      console.log(isExpanded);
      this.isSidebarExpanded = isExpanded;
    });
  }
  ngOnInit(): void {
    this.isDarkMode = this.themeService.getDarkTheme;
    this.user = this.userService.getUser();
    console.log(this.user);
  }
  
  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.getDarkTheme;
  }

  public logout() {
    this.userService.logout();
    this.router.navigate(['home']);
  }
}
