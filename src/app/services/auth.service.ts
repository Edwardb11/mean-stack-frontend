import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, observable, of, Subscriber, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: any = null;

  get user() {
    return this._user;
  }
  constructor(private httpCliennt: HttpClient) {}

  login(data: { email: string; password: string }) {
    // const {email,password}=data;
    return this.httpCliennt
      .post<any>('http://localhost:3000/auth/login', data)
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
  validarToken():Observable<boolean>{
    const token = JSON.parse(localStorage.getItem('user')!)
    if (token) {
      return new Observable((Subscriber)=>{
        Subscriber.next(true);
      }) 
    }
    else{
      return new Observable((Subscriber)=>{
        Subscriber.next(false);
      }) 
    }
    
  }
}
