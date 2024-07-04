import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import { Data } from 'src/types/examify-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrl: './view-quiz-questions.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId !: number;
  title: string | null = null;
  questions: Data.Question[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.qId = +this.route.snapshot.paramMap.get('id')!;
    this.title = this.route.snapshot.paramMap.get('title');
    this.loadQuestionsOfQuiz()
  }

  loadQuestionsOfQuiz() {
    this.categoryService
      .getQuestionsOFSpecificQuiz(this.qId)
      .subscribe((data: any) => {
        console.log(data);
        this.questions = data;
      });
  }

  onDelete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        title: 'swalh5',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteQuestionBy(id);
        Swal.fire({
          title: 'Deleted!',
          text: `${id}  has been deleted.`,
          icon: 'success',
        });
      }
    });
  }

  deleteQuestionBy(id: number) {
    this.categoryService.deleteQuestion(id).subscribe((data) => {
      console.log(data);
      this.loadQuestionsOfQuiz();
    });

  }
}
