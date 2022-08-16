import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApigetService {
  private  baseUrl = "http://jsonplaceholder.typicode.com/todos";
  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
