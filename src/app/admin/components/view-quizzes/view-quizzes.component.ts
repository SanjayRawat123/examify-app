import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ViewQuizzesComponent implements OnInit {
  quizzes: Data.Quiz[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
   this.loadQuizzes();
  }

  loadQuizzes(): void {
    this.categoryService.getQuizzes().subscribe(
      (data: Data.Quiz[]) => {
        console.log(data);
        this.quizzes = data;
        // this.filteredCategories = data;
        // this.paginateCategories();
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
