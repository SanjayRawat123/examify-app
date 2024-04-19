import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [CommonModule, HomeRoutingModule, NgbModule],
})
export class HomeModule {}
