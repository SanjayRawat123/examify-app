import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SignComponent } from './components/sign/sign.component';

import { HomeContainsViewComponent } from './components/home-contains-view/home-contains-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SignComponent,
    HomeContainsViewComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, NgbModule, ReactiveFormsModule],
})
export class HomeModule {}
