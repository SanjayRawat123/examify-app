import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss'
})
export class InstructionsComponent implements OnInit {
  quizId !: number;
  quiz: Data.Quiz | undefined;
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
    this.quizId = route.snapshot.params['qId'];
  }


  ngOnInit(): void {
    this.categoryService.getQuizById(this.quizId).subscribe(
      (respose) => {
        console.log(respose)
        this.quiz = respose;
      }
    )
  }




}
