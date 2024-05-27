import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { debounceTime, map, catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class UsernameValidator implements AsyncValidator {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const username = control.value;
    if (!username) {
      return of(null);
    }
    return this.http
      .get<boolean>(`${this.baseUrl}/user/check-username?username=${username}`)
      .pipe(
        debounceTime(300),
        switchMap((response) =>
          response ? of({ usernameTaken: true }) : of(null)
        ),
        catchError(() => of(null))
      );
  }
}
