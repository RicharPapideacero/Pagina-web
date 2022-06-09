import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{Productos} from './http.interfaces'


@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient) { }

  obtenerinfo() {
   
    return this.http.get<Productos[]>(`http://localhost:3050/productosindex`)
  }
}
