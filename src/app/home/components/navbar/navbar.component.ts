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

  constructor(
    private modalService: NgbModal,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {

  }

  public open(): void {
    this.modalService.open(UserLoginComponent);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
