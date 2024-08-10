import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SharedModule } from '../shared-modules/shared.module';
import { LoadQuizComponent } from './components/load-quiz/load-quiz.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';


@NgModule({
  declarations: [
    UserComponent,
    SideBarComponent,
    LoadQuizComponent,
    InstructionsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule,
    NgxUiLoaderModule,
  ]
})
export class UserModule { }
