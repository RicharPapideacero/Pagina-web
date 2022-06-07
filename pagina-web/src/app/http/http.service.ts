import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{Productoestru} from './http.interfaces'
@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient) { }

  obtenerinfo(nombreproduct: String):Observable<Productoestru[]> {
    return this.http.get<Productoestru[]>(`http://localhost:3050/productosindex`)
  }
}
