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
  message:string = ''
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
      (quizzes: Data.Quiz[]) => {
        if (quizzes.length === 0) {
          this.quizzes = [];
          this.message = 'No quizzes found for this category.';
        } else {
          this.quizzes = quizzes;
          this.message = '';
        }
      },
      (error) => {
        console.error('Error fetching quizzes:', error);
        this.message = 'An error occurred while fetching quizzes.';
      }
    );
  }

}
