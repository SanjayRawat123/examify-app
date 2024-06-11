import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CategoryTampalte } from 'src/app/admin/components/add-category/tamplate/category-tmp';
import { environment } from 'src/environments/environment.development';
import { Data } from 'src/types/examify-interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  readAll(type: string): Observable<any> {
    const url = `${this.apiUrl}/${type}`;
    return this.http.get(url);
  }

  readOne(type: string, id: number): Observable<any> {
    const url = `${this.apiUrl}/${type}/${id}`;
    return this.http.get(url);
  }

  create(type: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${type}`;
    return this.http.post(url, data);
  }

  update(type: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${type}`;
    return this.http.put(url, data);
  }

  createCategory(category: CategoryTampalte): Observable<Data.Category> {
    const categoryData: Data.Category = this.transformCategoryTmp(category);
    if (category.id) {
      return this.update('category/', categoryData);
    } else {
      return this.create('category/', categoryData);
    }
  }

  private transformCategoryTmp(category: CategoryTampalte): Data.Category {
    return {
      cId: category.id,
      title: category.title,
      description: category.description,
    };
  }

  getCategories(): Observable<Data.Category[]> {
    return this.readAll('category/').pipe(
      map((response: any) => response.data)
    );
  }

  getCategoryById(id: number) {
    return this.readOne('category', id).pipe(
      map((response: any) => response.data)
    );
  }
}
