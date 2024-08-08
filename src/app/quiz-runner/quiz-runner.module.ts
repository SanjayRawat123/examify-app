import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRunnerRoutingModule } from './quiz-runner-routing.module';
import { QuizRunnerComponent } from './quiz-runner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    QuizRunnerComponent
  ],
  imports: [
    CommonModule,
    QuizRunnerRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({})
  ]
})
export class QuizRunnerModule { }
