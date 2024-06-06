import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Data } from 'src/types/examify-interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  readAll(type: string): Observable<any> {
    const url = `this.apiUrl/${type}`;
    return this.http.get(url);
  }

  create(type: string, data: any): Observable<any> {
    const url = `this.apiUrl/${type}`;
    return this.http.post(url, data);
  }

  saveCategory(data: Data.Category): Observable<Data.Category> {
    return this.create('category/', data);
  }
}
