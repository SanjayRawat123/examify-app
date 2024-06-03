import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from 'src/types/examify-interface';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  //sign up with this funtion
  createUser(user: Data.UserSigUp): Observable<any> {
    const url = `${this.apiUrl}/user/`;
    return this.http.post(url, user);
  }

  //login with this funtion
  login(data: Data.UserLogin): Observable<any> {
    console.log(data);
    const url: string = `${this.apiUrl}/generate-token`;
    return this.http.post(url, data);
  }

  //set token in localStorage
  public loginUser(token: any) {
    console.log(token);
    localStorage.setItem('token', token);
    return true;
  }

  //get current logged in user by this funtion
  public getCurrenUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/current-user`).pipe();
  }

  //set user detailes
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //check if user login or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //get token form localStorage
  public getToken() {
    return localStorage.getItem('token');
  }

  //get user
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //get role
  public userRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  checkUsername(username: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.apiUrl}check-username?username=${username}`
    );
  }
}
