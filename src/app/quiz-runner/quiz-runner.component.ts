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
  attempted:number = 0;
  isSubmit:boolean = false;
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

  onSubmit() {
    Swal.fire({
      title: "Do you want to start quiz?",
      showCancelButton: true,
      confirmButtonText: "Start",
      customClass: {
        title: 'h4'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.questions);
        this.questions.forEach((q: Data.Question) => {
          this.isSubmit
          if (q.givenAnswer === q.answer) {  // Assuming `givenAnswer` is the correct property name
            this.correctAnswer++;
            let totalMarks: any = this.questions[0]?.quiz?.maxMarks;
            let singleMarks = +totalMarks / this.questions.length;
            this.gotMarks += singleMarks;
          }
          if(q.givenAnswer?.trim() != ''){
            this.attempted++
          }

        });
        console.log("correct answer", this.correctAnswer, "gotMarks:", this.gotMarks);
      }
    });
  }
  
}
