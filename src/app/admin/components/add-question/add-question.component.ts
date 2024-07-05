import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionTemplate } from './template-view/questions-view';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class AddQuestionComponent implements OnInit {

  qId: number | null = null;

  quesData: QuestionTemplate = new QuestionTemplate();

  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.quesData.quizId = +this.route.snapshot.paramMap.get('qId')!;
  }

  closeForm() { }

  onSave() {
    this.categoryService.createQuestionOfQuiz(this.quesData).subscribe((data) => {
      console.log('saved quiz', data);
      Swal.fire({
        icon: 'success',
        title: `Question Added successfully'`,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title: 'h5',
        },
      });
      this.location.back();
    });
    console.log(this.quesData)
  }


}
