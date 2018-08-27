import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { ContactComponent } from './contact.component';

const routes: Routes = Route.withShell([
  { path: 'contact',
    component: ContactComponent,
    data: {
      title: extract('Contact')
    }
  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContactRoutingModule { }
