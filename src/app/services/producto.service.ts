import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class productoService {
  apiUri='/Api/producto';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http:HttpClient) { }

  getTodosCursosData(): Observable<any>{
    return this.http.get<any>(this.apiUri);
  }

  nuevoProducto(token:any, data:any):Observable<any>{
    return this.http.post<any>(
      this.apiUri,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          accessToken: `${token}`
        }
      });
  }

  eliminarproducto(id:any):Observable<any>{
    return this.http.delete<any>(this.apiUri+"/"+id, {
      headers: {
        'Content-Type': 'application/json',
        id: `${id}`
      }
    });             
  }

}
