import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/backend-services/category/category.service';

@Component({
  selector: 'app-view-quiz-questions',
  standalone: true,
  imports: [],
  templateUrl: './view-quiz-questions.component.html',
  styleUrl: './view-quiz-questions.component.scss',
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId: number | null = null;
  title: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {

  }

  ngOnInit(): void {
    this.qId = +this.route.snapshot.paramMap.get('id')!;
    this.title = this.route.snapshot.paramMap.get('title');

    console.log(this.qId, this.title);
    this.categoryService.getQuestionsOFSpecificQuiz(this.qId).subscribe(
      (data:any)=>{
        console.log(data)
      }
    )
  }
}
