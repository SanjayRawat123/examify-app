import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LoadQuizComponent } from './components/load-quiz/load-quiz.component';
import { InstructionsComponent } from './components/instructions/instructions.component';

const routes: Routes = [
 {
    path: '', component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'quizzs',
        pathMatch: 'full',
      },
      {
        path: 'quizzs',
        component: LoadQuizComponent,
      },
      {
        path: 'instructions',
        component: InstructionsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
