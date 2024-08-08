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
  correctAnswer: number = 0;
  gotMarks: number = 0;
  attempted: number = 0;
  isSubmit: boolean = false;
  timer: number = 0;
  interval: any;
  totalDuration: number = 0;
  persentage:any
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
        this.questions.forEach((q: Data.Question) => {
          this.isSubmit = true
          if (q.givenAnswer === q.answer) {  // Assuming `givenAnswer` is the correct property name
            this.correctAnswer++;
            let totalMarks: any = this.questions[0]?.quiz?.maxMarks;
            let singleMarks = +totalMarks / this.questions.length;
            this.gotMarks += singleMarks;
          }
          if (q.givenAnswer?.trim() != '') {
            this.attempted++
          }

        });
        console.log("correct answer", this.correctAnswer, "gotMarks:", this.gotMarks);
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

  getProgress(): number {
    const progress = ((this.totalDuration - this.timer) / this.totalDuration) * 100;
    console.log(`Progress Calculated: ${progress}`); 
   this.persentage = this.persentage +progress;
    return progress;
  }
}
