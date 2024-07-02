import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionTemplate } from './template-view/questions-view';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.scss'
})
export class AddQuestionComponent implements OnInit {
  qId: number | null = null;
  
  questionTemplate:QuestionTemplate = new QuestionTemplate();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.qId = +this.route.snapshot.paramMap.get('qId')!;
  }

}
