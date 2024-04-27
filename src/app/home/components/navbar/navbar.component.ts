import { Component, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from 'src/app/ui-services/theme.service';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  centered: any;
  isDarkeMode: boolean = false;
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkeMode = this.themeService.getDarkTheme;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkeMode = this.themeService.getDarkTheme;
  }
}
