import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  catchError,
  map,
  Observable,
  of,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _user: any = null;

  private baseUrl=environment.baseUrl

  get user() {
    return this._user;
  }

  constructor(private httpCliennt: HttpClient) {}

  // Funcion para loguearse
  login(data: { email: string; password: string }) {
    // const {email,password}=data;
    return this.httpCliennt
      .post<any>(`${this.baseUrl}/auth/login`, data)
      .pipe(
        // Procesar abtres de la respuesta,filtrar solo lo que nos interesa
        tap((res) => {
          if (res.ok === true) {
            this._user = {
              id: res.id,
              username: res.username,
              token: res.token,
            };
          } else {
            this._user = null;
          }
        }),
        map((res) => res.ok),
        catchError((err) => of(err.error.msg))
      );
  }

  // funcion para registrar un usuario
  register(data: { username:string, email: string; password: string }) {
    return this.httpCliennt
      .post<any>(`${this.baseUrl}/auth/register`, data)
      .pipe(
        // Procesar abtres de la respuesta,filtrar solo lo que nos interesa
        tap((res) => {
          if (res.ok === true) {
            this._user = {
              id: res.id,
              username: res.username,
              token: res.token,
            };
          } else {
            this._user = null;
          }
        }),
        map((res) => res.ok),
        catchError((err) => of(err.error.msg))
      );
  }

  // Funcion para obtener el usuario del localStorage
  validarToken(): Observable<boolean> {
    const token = JSON.parse(localStorage.getItem('user')!);
    if (token) {
      return new Observable((Subscriber) => {
        Subscriber.next(true);
      });
    } else {
      return new Observable((Subscriber) => {
        Subscriber.next(false);
      });
    }
  }
}
