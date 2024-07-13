import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrl: './load-quiz.component.scss'
})
export class LoadQuizComponent implements OnInit {
  quizzes: Data.Quiz[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getQuizzes().subscribe(
      (data) => {
        this.quizzes = data;
        console.log(data)
      }, (error) => {
        console.log()
      }
    )
  }

}
