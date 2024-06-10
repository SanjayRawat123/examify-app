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

  ngOnInit(): void {}

  onSave(): void {
    this.categoryService
      .createCategory(this.category)
      .subscribe((data: any) => {
        console.log('data retrun by service', data);
        if (data.status === 'success') {
          this.onSaved.emit(true);
          this.activeModal.dismiss();
        }
      });
  }
}
