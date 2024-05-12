import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [AdminComponent, SideBarComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
