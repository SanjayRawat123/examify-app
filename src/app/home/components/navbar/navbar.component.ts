import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
