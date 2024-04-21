import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SignComponent } from './components/sign/sign.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, SignComponent],
  imports: [CommonModule, HomeRoutingModule, NgbModule, MatButtonModule],
})
export class HomeModule {}
