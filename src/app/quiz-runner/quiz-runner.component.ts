import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-runner',
  templateUrl: './quiz-runner.component.html',
  styleUrl: './quiz-runner.component.scss'
})
export class QuizRunnerComponent {
  quizId: number;

  constructor(private route: ActivatedRoute) {
    this.quizId = route.snapshot.params['qId'];
  }
}
