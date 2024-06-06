import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CategoriesComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openAddCategoryMdl(cId?: number) {
    const modalRef = this.modalService.open(AddCategoryComponent);
     modalRef.componentInstance.cId = cId;
  }
}
