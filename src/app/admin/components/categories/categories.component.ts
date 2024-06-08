import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Data } from 'src/types/examify-interface';
import { CategoryService } from 'src/app/backend-services/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CategoriesComponent implements OnInit {
  categories: Data.Category[] = [];

  constructor(
    private modalService: NgbModal,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: Data.Category[]) => {
        console.log(data)
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  openAddCategoryMdl(cId?: number) {
    const modalRef = this.modalService.open(AddCategoryComponent, {
      centered: true,
    });
    modalRef.componentInstance.cId = cId;
  }
}
