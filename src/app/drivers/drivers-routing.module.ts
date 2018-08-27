import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { DriversComponent } from './drivers.component';

const routes: Routes = Route.withShell([
  { path: 'drivers',
    component: DriversComponent,
    data: {
      title: extract('Drivers')
    }
  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DriversRoutingModule { }
