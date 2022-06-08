import { Component, OnInit } from '@angular/core';
import { Department } from './../../_models/department';
import { DepartmentService } from './../../department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css'],
})
export class DepartmentAddComponent implements OnInit {

  newdept: Department = new Department(0, '', '')
  save(){
    this.deptSer.addDepartment(this.newdept).subscribe(
      a=>console.log(a)
      
    )
  }
  constructor(public deptSer:DepartmentService) { }
 
  ngOnInit(): void {
  }

}
