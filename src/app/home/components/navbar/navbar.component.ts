import { Component, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from 'src/app/ui-services/theme.service';

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

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
