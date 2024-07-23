import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-runner',
  templateUrl: './quiz-runner.component.html',
  styleUrl: './quiz-runner.component.scss'
})
export class QuizRunnerComponent implements OnInit {
  quizId: number;

  constructor(private route: ActivatedRoute,private locationState:LocationStrategy) {
    this.quizId = route.snapshot.params['qId'];
  }

  ngOnInit(): void {
    this.preventBackButton();
  }

  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationState.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }
}
