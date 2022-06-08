import { Component, OnInit,Input } from '@angular/core';
import { DepartmentService } from './../../department.service';
import { Department } from './../../_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {

 depts:Department[]=[]
 deptDetailsId=0
 deptEditId=0
  constructor(public deptSer:DepartmentService ) { }

  load(){
  this.deptSer.getAllDepartment().subscribe(a=>this.depts=a)
}

  ngOnInit(): void {
 
  }

}
