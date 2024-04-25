import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from 'src/types/examify-interface';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  createUser(user:Data.UserSigUp):Observable<any>{
    const url = `${this.apiUrl}/user/`
    return this.http.post(url,user);

  }


}
