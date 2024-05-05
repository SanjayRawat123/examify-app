import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SignComponent } from './components/sign/sign.component';

import { HomeContainsViewComponent } from './components/home-contains-view/home-contains-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreDirectivesModule } from 'src/@Core-scss/directives/directives';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../backend-services/user-service/user.service';
import { ToastrModule, provideToastr } from 'ngx-toastr';

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
    CoreDirectivesModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [UserService, provideToastr()],
})
export class HomeModule {}
