import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DepartmentService } from './../../department.service';
import { Department } from './../../_models/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit, OnChanges {
  @Input() deptId: number = 0
  department: Department = new Department(0, '', '')
  constructor(public deptSer: DepartmentService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['deptId'].isFirstChange())
      this.deptSer.getDepartmentById(this.deptId).subscribe(
        a => this.department = a
      )
  }
  ngOnInit(): void {
  }
  
  save(){
    this.deptSer.updateDepartment(this.department).subscribe(
      a=>console.log(a)
      
    )
  }

}
