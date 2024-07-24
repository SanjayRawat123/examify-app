import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../backend-services/category/category.service';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-quiz-runner',
  templateUrl: './quiz-runner.component.html',
  styleUrl: './quiz-runner.component.scss'
})
export class QuizRunnerComponent implements OnInit {
  quizId: number;
  questions: Data.Question[] = [];

  constructor(private route: ActivatedRoute, private locationState: LocationStrategy,
    private categoryService: CategoryService) {
    this.quizId = route.snapshot.params['qId'];
  }

  ngOnInit(): void {
    this.preventBackButton();
    this.loadQuizQuiestions();
  }

  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationState.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }

  loadQuizQuiestions() {
    this.categoryService.getQuestionsOFSpecificQuizForTest(this.quizId).subscribe(
      (response) => {
        this.questions = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
