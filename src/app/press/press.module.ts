import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

import { PressRoutingModule } from './press-routing.module';
import { PressComponent } from './press.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PressRoutingModule,
    SharedModule
  ],
  declarations: [
    PressComponent
  ]
})
export class PressModule { }
