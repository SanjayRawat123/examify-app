import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SignComponent } from './components/sign/sign.component';

import { HomeContainsViewComponent } from './components/home-contains-view/home-contains-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SignComponent,
    HomeContainsViewComponent,
    UserLoginComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
})
export class HomeModule {}
