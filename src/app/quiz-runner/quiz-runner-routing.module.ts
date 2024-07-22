import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizRunnerComponent } from './quiz-runner.component';

const routes: Routes = [{ path: '', component: QuizRunnerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRunnerRoutingModule { }
