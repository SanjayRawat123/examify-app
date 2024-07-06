import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNavbarComponent } from './shared-navbar/shared-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ValidationalAlertComponent } from './validationa-alert/validationa-alert.component';

@NgModule({
  declarations: [SharedNavbarComponent, ValidationalAlertComponent],
  imports: [CommonModule, CommonModule, NgbModule, FormsModule],
  exports: [SharedNavbarComponent,ValidationalAlertComponent],
})
export class SharedModule { }
