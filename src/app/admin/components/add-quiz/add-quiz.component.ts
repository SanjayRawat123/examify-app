import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import { CategoryArray, QuizFormTemplate } from './quiz-template-view/add-quiz';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.scss',
})
export class AddQuizComponent implements OnInit {
  quiz: QuizFormTemplate = new QuizFormTemplate();

  categories: CategoryArray[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        console.log(data);
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onsave() {
    this.categoryService.createQuiz(this.quiz).subscribe((data) => {
      console.log(data);
    });
  }
}
