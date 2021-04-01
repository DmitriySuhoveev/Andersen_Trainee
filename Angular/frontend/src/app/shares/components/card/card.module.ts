import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
