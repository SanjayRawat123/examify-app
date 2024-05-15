import { Component, OnInit } from '@angular/core';
import { ThemeService } from './ui-services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'examify-app';

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
  }
}
