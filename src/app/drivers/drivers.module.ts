import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DriversRoutingModule,
    SharedModule
  ],
  declarations: [
    DriversComponent
  ]
})
export class DriversModule { }
