import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeContainsViewComponent } from './components/home-contains-view/home-contains-view.component';
import { SignComponent } from './components/sign/sign.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeContainsViewComponent },
      { path: 'user/sign', component: SignComponent },
      { path: 'user/login', component: UserLoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
