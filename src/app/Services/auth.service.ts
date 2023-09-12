import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string =" "
  constructor(private http : HttpClient ) { }
  
  Login(LoginModel:any){
    return this.http.post<any>(`${this.baseUrl}login`, LoginModel);  
  }
} 

