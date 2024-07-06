import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedNavbarComponent } from '../shared-modules/shared-navbar/shared-navbar.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { ValidationalAlertComponent } from '../shared-modules/validationa-alert/validationa-alert.component';
import { ViewQuizzesComponent } from './components/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { ViewQuizQuestionsComponent } from './components/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { SharedModule } from '../shared-modules/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    AddCategoryComponent,
    CategoriesComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,

  ],
  imports: [
    CommonModule,
    NgbModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ],
})
export class AdminModule { }
