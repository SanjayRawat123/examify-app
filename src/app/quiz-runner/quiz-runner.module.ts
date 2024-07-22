import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRunnerRoutingModule } from './quiz-runner-routing.module';
import { QuizRunnerComponent } from './quiz-runner.component';


@NgModule({
  declarations: [
    QuizRunnerComponent
  ],
  imports: [
    CommonModule,
    QuizRunnerRoutingModule
  ]
})
export class QuizRunnerModule { }
