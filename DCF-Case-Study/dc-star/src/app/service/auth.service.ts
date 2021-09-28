import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:8081/register";
  private _loginUrl = "http://localhost:8081/login";

  constructor(private http: HttpClient,
    private _router: Router) { }

  //insert user info to the database
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  //removes token from browser's local storage when logged out and navigate to home page
  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }

  //function to check whether the user has logged in
  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
