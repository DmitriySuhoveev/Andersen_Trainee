import { IconModule } from './../../icon/icon.module';
import { AddItemComponent } from './add-item/add-item.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardModule } from '../../templates/card/card.module';

import {  MatInputModule  } from '@angular/material/input';
import {  MatIconModule } from '@angular/material/icon';
import {  MatFormFieldModule  } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [DashboardComponent, AddItemComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    IconModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
