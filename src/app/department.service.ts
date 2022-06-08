import { Department } from './_models/department';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//bey3mel creation we ba3den inject
@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  private depts: Department[] = [
    new Department(1, 'sd', 'mansoura'),
    new Department(2, 'mearn', 'cairo'),
    new Department(3, 'net', 'alex'),
    new Department(4, 'bi', 'smart'),
  ]
  baseUrl:string="http://localhost:8080/departments/"
  getAllDepartment() {
  return this.http.get<Department[]>(this.baseUrl) 
  }
  
  getDepartmentById(id: number) {
   return this.http.get<Department>(this.baseUrl+id)
  }
  
  
  addDepartment(dept: Department) {
  return this.http.post<Department>(this.baseUrl,dept)
    //  this.depts.push(dept)3alshan maygarsh fel aslia
   // this.depts.push(new Department(dept.id, dept.name, dept.location))
  }
  
  updateDepartment(dept:Department){
  return  this.http.put<Department>(this.baseUrl+dept._id,dept)
  }
  constructor(public http:HttpClient) { }
}
