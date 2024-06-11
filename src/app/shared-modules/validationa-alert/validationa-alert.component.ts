import { Component, Input } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-validational-alert',
  templateUrl: './validationa-alert.component.html',
  styleUrl: './validationa-alert.component.scss'
})
export class ValidationalAlertComponent {
  @Input() controlName !: string;
  @Input() control !: NgModel ;
}
