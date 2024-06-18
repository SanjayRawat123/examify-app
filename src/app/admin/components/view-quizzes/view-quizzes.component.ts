import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import { Data } from 'src/types/examify-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ViewQuizzesComponent implements OnInit {
  quizzes: Data.Quiz[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes(): void {
    this.categoryService.getQuizzes().subscribe(
      (data: Data.Quiz[]) => {
        console.log(data);
        this.quizzes = data;
        // this.filteredCategories = data;
        // this.paginateCategories();
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onDelete(id: number, title: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        title: 'swalh5',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteQuiz(id);
        Swal.fire({
          title: 'Deleted!',
          text: `${title + id}  has been deleted.`,
          icon: 'success',
        });
      }
    });
  }

  deleteQuiz(id: number) {
    this.categoryService.deleteQuizById(id).subscribe((data) => {
      console.log(data);
      this.loadQuizzes();
    });
  
  }
}
