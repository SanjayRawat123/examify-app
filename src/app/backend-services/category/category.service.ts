import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CategoryTampalte } from 'src/app/admin/components/add-category/tamplate/category-tmp';
import { QuizFormTemplate } from 'src/app/admin/components/add-quiz/quiz-template-view/add-quiz';
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

  delete(type: string, id: number): Observable<any> {
    const url = `${this.apiUrl}/${type}/${id}`;
    return this.http.delete(url);
  }

  /**++++++++++++++++++++++++++++++++ <>POST PUT ACTIONS <>+++++++++++++++++++++++++++++++ */
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

  createQuiz(quiz: QuizFormTemplate): Observable<Data.Quiz> {
    const quizData: Data.Quiz = this.transformQuizNgtoServer(quiz);
    console.log(quizData);
    if (quiz.id) {
      return this.update('quiz/', quizData);
    } else {
      return this.create('quiz/', quizData);
    }
  }

  private transformQuizNgtoServer(quiz: QuizFormTemplate): Data.Quiz {
    return {
      qId: quiz.id,
      title: quiz.title,
      description: quiz.description,
      maxMarks: quiz.maxMarks,
      numOfQuestions: quiz.numOfQuestions,
      active: quiz.active,
      category: {
        cId: quiz.categoryId,
      },
    };
  }
  /**++++++++++++++++++++++++++++++++ </>POST PUT ACTIONS above </>+++++++++++++++++++++++++++++++ */

  /**++++++++++++++++++++++++++++++++ <>Get  ACTIONS below <> +++++++++++++++++++++++++++++++ */
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

  getQuizzes(): Observable<Data.Quiz[]> {
    return this.readAll('quiz/').pipe(map((response: any) => response.data));
  }

  getQuizById(id: number): Observable<Data.Quiz> {
    return this.readOne('quiz', id).pipe(map((response: any) => response.data));
  }

  getQuestionsOFSpecificQuiz(qId: number): Observable<Data.Question> {
    return this.readOne('question/quiz', qId).pipe(
      map((response: any) => response.data)
    );
  }
  /**++++++++++++++++++++++++++++++++ <>Get ACTIONS above <> +++++++++++++++++++++++++++++++ */

  deleteCategoryById(id: number): Observable<any> {
    return this.delete('category', id);
  }

  deleteQuizById(id: number): Observable<any> {
    return this.delete('quiz', id);
  }
}
