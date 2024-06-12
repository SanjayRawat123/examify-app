import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class ViewQuizzesComponent {
  hello() {
    console.log("Click event triggered!");
    alert("Content clicked!");
  }
}
