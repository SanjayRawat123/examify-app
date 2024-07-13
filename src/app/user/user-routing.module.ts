import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LoadQuizComponent } from './components/load-quiz/load-quiz.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'quizzs', // Redirect to categories by default
        pathMatch: 'full',
      },
      {
        path: 'quizzs',
        component: LoadQuizComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
