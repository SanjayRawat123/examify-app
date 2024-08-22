import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../backend-services/category/category.service';
import { Data } from 'src/types/examify-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-runner',
  templateUrl: './quiz-runner.component.html',
  styleUrl: './quiz-runner.component.scss'
})
export class QuizRunnerComponent implements OnInit {
  quizId: number;
  questions: Data.Question[] = [];
  isSubmit: boolean = false;
  timer: number = 0;
  interval: any;
  totalDuration: number = 0;
  persentage: any
  result:any;
  constructor(private route: ActivatedRoute, private locationState: LocationStrategy,
    private categoryService: CategoryService) {
    this.quizId = route.snapshot.params['qId'];
  }

  ngOnInit(): void {
    this.preventBackButton();
    this.loadQuizQuiestions();
    this.startTimer();
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
        this.totalDuration = this.questions.length * 2 * 60; // Each question has 2 minutes
        this.timer = this.totalDuration;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onSubmit() {
    Swal.fire({
      title: "Do you want to submit quiz?",
      showCancelButton: true,
      confirmButtonText: "Submit",
      customClass: {
        title: 'h4'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.questions);
        this.categoryService.evaluateQuiz(this.questions).subscribe(response => {
          console.log('Quiz evaluation result:', response);
          this.isSubmit =true;
          this.result =response;
        });
      }
    });
  }


  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.onSubmit();
        clearInterval(this.interval);
      }
    }, 1000);
  }

  formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const secs: number = seconds % 60;
    return `${this.pad(minutes)}:${this.pad(secs)}`;
  }

  pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }


}
