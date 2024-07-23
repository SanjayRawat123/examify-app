import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import { Data } from 'src/types/examify-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class InstructionsComponent implements OnInit {
  quizId !: number;
  quiz: Data.Quiz | undefined;
  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router) {
    this.quizId = route.snapshot.params['qId'];
  }


  ngOnInit(): void {
    this.categoryService.getQuizById(this.quizId).subscribe(
      (respose) => {
        console.log(respose)
        this.quiz = respose;
      }
    )
  }

  getTimeLimit(numberOfQuestions: any): number {
    let numberOfQes = parseInt(numberOfQuestions)
    return numberOfQes * 2;
  }

  getEachQuesMarks(numberOfQuestions: any, totalMarks: any) {
    let totalNumQues = parseInt(numberOfQuestions);
    let totalMarksOfQuiz = parseInt(totalMarks);
    return totalMarksOfQuiz / totalNumQues

  }

  onStartQuiz(qId?: number) {
    Swal.fire({
      title: "Do you want to start quiz?",
      showCancelButton: true,
      confirmButtonText: "Start",
      customClass: {
        title: 'h4'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/quiz-runner/' + this.quizId]);
      }
    });
  }
}
