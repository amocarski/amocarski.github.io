import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FilterArrayPipe } from './filter/filter-array.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    FilterArrayPipe
  ],
  exports: [
    LoaderComponent,
    FilterArrayPipe
  ]
})
export class SharedModule { }
