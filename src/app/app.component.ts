import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepartmentService } from './department.service';
import { TryobservableService } from './tryobservable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //  providers:[DepartmentService]
})
export class AppComponent {
  title = 'app3';
  constructor(public o: TryobservableService, public deptser: DepartmentService) { }

  sub: Subscription | null = null

}
