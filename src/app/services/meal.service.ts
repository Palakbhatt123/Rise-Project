import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeRequest } from '../models/employee-request.model';
import { ChangePasswordRequest } from '../models/changepassword-request.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http:HttpClient) { }

  loginVerify(model: LoginRequest):Observable<EmployeeRequest>{    
    return this.http.post<EmployeeRequest>('https://localhost:7067/api/Employee/login',model);
  }

  changePassword(model: ChangePasswordRequest):Observable<EmployeeRequest>{    
    return this.http.put<EmployeeRequest>('https://localhost:7067/api/Employee/emp',model);
  }
}
