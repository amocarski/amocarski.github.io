import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { PressComponent } from './press.component';

const routes: Routes = Route.withShell([
  { path: 'press',
    component: PressComponent,
    data: {
      title: extract('Press')
    }
  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PressRoutingModule { }
