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

  // Metodo para obtener todas las tareas del usuario
  read() {
    // Obtener el token para mandarlo por el headers
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.httpCliennt.get<any>(`${this.baseUrl}/task/read`, { headers });
  }
  // Metodo para eliminar una tarea del usuario
  delete(id: string) {
    // Obtener el token para mandarlo por el headers
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.httpCliennt.delete<any>(`${this.baseUrl}/task/delete/${id}`, {
      headers,
    });
  }

  // Metodo para crear una tarea del usuario
  create(value: string) {
    // Obtener el token para mandarlo por el headers
    const headers = {
      'x-auth-token': this.user.token,
    };
    return this.httpCliennt.post<any>(
      `${this.baseUrl}/task/create`,
      { nombre: value },
      {
        headers,
      }
    );
  }
}
