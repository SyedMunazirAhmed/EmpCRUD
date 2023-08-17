import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from './Emp';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}
  addEmployee(data: Emp): Observable<any> {
    return this._http.post('http://localhost:3000/emplyoee', data);
  }
  getEmployee(): Observable<any> {
    return this._http.get('http://localhost:3000/emplyoee');
  }
  getEmployeeDetail(refId?: number): Observable<any> {
    return this._http.get('http://localhost:3000/emplyoee/' + refId);
  }
  deleteEmployee(refId: number): Observable<any> {
    return this._http.delete('http://localhost:3000/emplyoee/' + refId);
  }
  editEmployee(refId: number, data: any): Observable<any> {
    return this._http.put('http://localhost:3000/emplyoee/' + refId, data);
  }

  validateCredentials(username: string): Observable<any> {
    return this._http.get<any>('http://localhost:3000/credentials/' + username);
  }
}
