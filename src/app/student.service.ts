import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/student';
  constructor(private http: HttpClient) { }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, student);
  }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
