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

@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    SharedNavbarComponent,
    AddCategoryComponent,
    CategoriesComponent,
    ValidationalAlertComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
