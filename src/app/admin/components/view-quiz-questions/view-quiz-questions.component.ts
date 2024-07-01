import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrl: './view-quiz-questions.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId: number | null = null;
  title: string | null = null;
  questions: Data.Question[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.qId = +this.route.snapshot.paramMap.get('id')!;
    this.title = this.route.snapshot.paramMap.get('title');

    console.log(this.qId, this.title);
    this.categoryService
      .getQuestionsOFSpecificQuiz(this.qId)
      .subscribe((data: any) => {
        console.log(data);
        this.questions = data;
      });
  }
}
