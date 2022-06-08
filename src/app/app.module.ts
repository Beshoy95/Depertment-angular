import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from './department.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    DepartmentDetailComponent,
    DepartmentEditComponent,
    DepartmentAddComponent
  ],
  imports: [
  
  BrowserModule, FormsModule,HttpClientModule
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
