import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Data } from 'src/types/examify-interface';
import { Category } from './model/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AddCategoryComponent implements OnInit {
  @Input() cId!: number;
  category!: Category;

  constructor(public activeModal: NgbActiveModal) {
    this.category = new Category(this.cId, '', '');
  }

  ngOnInit(): void {}

  onSave(): void {
    console.log('Category created:', this.JsonToSave());
  }

  JsonToSave(): Data.Category {
    return {
      id: this.category.id,
      title: this.category.title,
      description: this.category.description,
    };
  }
}
