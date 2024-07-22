import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './ui-services/auth.guard';
import { adminGuard } from './ui-services/admin-guard/admin.guard';
import { userGuard } from './ui-services/user-guard/user.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [adminGuard]
  },

  {
    path: 'user-dashboard',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate:[userGuard]
  },
  { path: 'quiz-runner/:qId', loadChildren: () => import('./quiz-runner/quiz-runner.module').then(m => m.QuizRunnerModule),
    canActivate:[userGuard]
   },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
