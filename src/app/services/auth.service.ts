import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpCliennt: HttpClient) {}
  login(data: { email: string; password: string }) {
    // const {email,password}=data;
    return this.httpCliennt.post('http://localhost:3000/auth/login', data);
  }
}
