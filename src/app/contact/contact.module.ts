import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule }        from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ContactRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
