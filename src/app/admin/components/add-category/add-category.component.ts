import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss',
})
export class AddCategoryComponent implements OnInit {
  @Input() cId!: number;
  category!:Data.Category;
 
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
