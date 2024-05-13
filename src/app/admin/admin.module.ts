import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CoreDirectivesModule } from 'src/@Core-scss/directives/directives';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdminComponent, SideBarComponent],
  imports: [CommonModule, NgbModule, AdminRoutingModule, CoreDirectivesModule],
})
export class AdminModule {}
