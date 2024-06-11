import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Data } from 'src/types/examify-interface';
import { CategoryTampalte } from './tamplate/category-tmp';
import { CategoryService } from 'src/app/backend-services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AddCategoryComponent implements OnInit {
  @Input() cId!: number;
  category!: CategoryTampalte;
  @Output() onSaved: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    private categoryService: CategoryService
  ) {
    this.category = new CategoryTampalte();
  }

  ngOnInit(): void {
    console.log(this.cId);
    this.editCategoryById();
  }

  editCategoryById() {
    this.categoryService.getCategoryById(this.cId).subscribe((data) => {
      console.log(data);
      this.category.description = data.description;
      this.category.title = data.title;
    });
  }

  onSave(): void {
    console.log(this.category);
    // this.categoryService
    //   .createCategory(this.category)
    //   .subscribe((data: any) => {
    //     console.log('data retrun by service', data);
    //     if (data.status === 'success') {
    //       this.onSaved.emit(true);
    //       this.activeModal.dismiss();
    //     }
    //   });
  }
}
