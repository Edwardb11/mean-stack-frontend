import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private baseUrl = environment.baseUrl;

  // user de localstorage
  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }

  constructor(private httpCliennt: HttpClient) {}

  read() {
    // Obtener el token para mandarlo por el headers
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.httpCliennt.get<any>(`${this.baseUrl}/task/read`, { headers });
  }
}
