import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ThemeService } from './ui-services/theme.service';
import { CoreDirectivesModule } from 'src/@Core-scss/directives/directives';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HomeModule,CoreDirectivesModule],
  providers: [
    provideAnimationsAsync(),
    ThemeService
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule {}
