import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrl: './load-quiz.component.scss'
})
export class LoadQuizComponent implements OnInit {
  quizzes: Data.Quiz[] = [];
  selectedCategoryId: number = 0
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params['categoryId']);
      if (params['categoryId']) {
        this.selectedCategoryId = +params['categoryId'];
        this.loadQuizzesByCategory(this.selectedCategoryId);
      } else {
        this.loadAllQuizzes();
      }
    });

  }

  loadAllQuizzes(): void {
    this.categoryService.getQuizzes().subscribe(
      (data) => {
        this.quizzes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadQuizzesByCategory(categoryId: number): void {
    this.categoryService.getCategoryQuizzes(categoryId).subscribe(
      (data) => {
        this.quizzes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
