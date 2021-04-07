import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardModule } from './../../shares/components/card/card.module';
import { IconModule } from './../../icon/icon.module';
import { AddItemComponent } from './add-item/add-item.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';

import {  MatInputModule  } from '@angular/material/input';
import {  MatIconModule } from '@angular/material/icon';
import {  MatFormFieldModule  } from '@angular/material/form-field';
import {  MatButtonModule } from '@angular/material/button';
import { DashboardService } from './dashboard-service/dashboard-service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [DashboardComponent, AddItemComponent, TodoListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    IconModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
