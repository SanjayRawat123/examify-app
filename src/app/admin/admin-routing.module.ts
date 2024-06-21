import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ViewQuizzesComponent } from './components/view-quizzes/view-quizzes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { ViewQuizQuestionsComponent } from './components/view-quiz-questions/view-quiz-questions.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'categories', // Redirect to categories by default
        pathMatch: 'full',
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,
      },
      {
        path: 'quizzes/add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path:'quiz/questions/:id/:title',
        component:ViewQuizQuestionsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
