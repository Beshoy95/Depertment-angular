import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DepartmentService } from './../../department.service';
import { Department } from './../../_models/department';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit, OnChanges {
  @Input() deptId: number = 0
  department: Department | null = null
  constructor(public deptSer: DepartmentService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['deptId'].isFirstChange())
    this.deptSer.getDepartmentById(this.deptId).subscribe(
      a => this.department = a
    )
  }
  ngOnInit(): void {
  }

}
