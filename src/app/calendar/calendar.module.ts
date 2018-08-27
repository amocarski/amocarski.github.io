import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CalendarRoutingModule,
    SharedModule
  ],
  declarations: [
    CalendarComponent
  ]
})
export class CalendarModule { }
