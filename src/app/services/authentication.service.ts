import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { Jwtres } from '../models/jwtres';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUri = '/api'; 
  private token: string | null = '';
  private authSubject = new BehaviorSubject(false); 

  constructor(private httpClient: HttpClient) { }

  async registrar(formValor: any): Promise<any> {
    return this.httpClient.post<any>(`${this.apiUri}/signup`, formValor).toPromise();
  }

  login(user: User): Observable<Jwtres> {
    console.log('en service');
    return this.httpClient.post<Jwtres>(`${this.apiUri}/login`, user).pipe(
      tap((res: Jwtres) => {
        if (res) {
          const accessToken = JSON.parse(JSON.stringify(res)).accessToken;
          const expiresIn = res.datosUsuario.expiresIn;
          this.saveToken(accessToken, expiresIn);
          this.authSubject.next(true); 
        } else {
          console.log('Hubo un error');
        }
      })
    );
  }

  logout() {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    this.authSubject.next(false); 
  }

  private saveToken(token: string, expiresIn: string) {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
