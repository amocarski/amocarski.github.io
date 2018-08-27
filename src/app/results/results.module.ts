import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ResultsRoutingModule,
    SharedModule
  ],
  declarations: [
    ResultsComponent
  ]
})
export class ResultsModule { }
