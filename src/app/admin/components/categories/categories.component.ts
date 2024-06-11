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
  filteredCategories: Data.Category[] = [];
  paginatedCategories: Data.Category[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  startDate: string = '';
  endDate: string = '';

  showSearchInput: boolean = false;

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
        console.log(data);
        this.categories = data;
        this.filteredCategories = data;
        this.paginateCategories();
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
    modalRef.componentInstance.onSaved.subscribe((result: any) => {
      this.loadCategories();
    });
  }

  onclickSearchIcon() {
    this.showSearchInput = true;
  }

  filterCategories(): void {
    console.log('console.log', this.searchTerm);
    if (this.searchTerm == '') {
      this.showSearchInput = false;
    }
    this.filteredCategories = this.categories.filter(
      (category) =>
        category.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        category.description
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
    );
    this.paginateCategories();
  }

  // sortCategories(criteria: string): void {
  //   this.filteredCategories.sort((a, b) => {
  //     if (criteria === 'cId') {
  //       return b.cId - a.cId;
  //     } else if (criteria === 'title') {
  //       return a.title.localeCompare(b.title);
  //     } else if (criteria === 'date') {
  //       // Assuming you have a date field in your Category model
  //       return new Date(b.date).getTime() - new Date(a.date).getTime();
  //     }
  //   });
  //   this.paginateCategories();
  // }
  changePage(page: number): void {
    if (page < 1 || page > this.totalPages()) {
      return;
    }
    this.currentPage = page;
    this.paginateCategories();
  }

  totalPages(): number {
    return Math.ceil(this.filteredCategories.length / this.pageSize);
  }
  paginateCategories(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedCategories = this.filteredCategories.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  // filterByDateRange(): void {
  //   if (this.startDate && this.endDate) {
  //     this.filteredCategories = this.categories.filter(
  //       (category) =>
  //         new Date(category.date) >= new Date(this.startDate) &&
  //         new Date(category.date) <= new Date(this.endDate)
  //     );
  //     this.paginateCategories();
  //   } else {
  //     this.filteredCategories = this.categories;
  //     this.paginateCategories();
  //   }
  // }
}
