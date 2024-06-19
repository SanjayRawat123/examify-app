import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import { CategoryArray, QuizFormTemplate } from './quiz-template-view/add-quiz';
import { Data } from 'src/types/examify-interface';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { mapDataToObject } from 'src/@Core-utility/mapping.util';
@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.scss',
})
export class AddQuizComponent implements OnInit {
  quizId!: number;
  PageTitle: string = 'Add New Quiz';
  quiz: QuizFormTemplate = new QuizFormTemplate();
  categories: CategoryArray[] = [];

  constructor(
    private categoryService: CategoryService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe((params) => {
      this.quizId = +params['qId'];
    });
  }

  ngOnInit(): void {
    if (this.quizId) {
      this.PageTitle = 'Edit Quiz';
      this.populateQuizById();
    }
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  populateQuizById() {
    this.categoryService.getQuizById(this.quizId).subscribe((data) => {
      // this.quiz = mapDataToObject(data, this.quiz);
      this.quiz.id = data.qId;
      this.quiz.description = data.description;
      this.quiz.title = data.title;
      this.quiz.categoryId = data.category.cId;
      this.quiz.maxMarks = data.maxMarks;
      this.quiz.numOfQuestions = data.numOfQuestions;
      this.quiz.active = data.active;
    });
  }

  onsave() {
    this.categoryService.createQuiz(this.quiz).subscribe((data) => {
      console.log('saved quiz', data);
      Swal.fire({
        icon: 'success',
        title: `${this.quiz.title} Added successfully'`,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title: 'h5',
        },
      });
      this.location.back();
    });
  }

  closeForm() {
    this.location.back();
  }
}
