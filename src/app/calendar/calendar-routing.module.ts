import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { CalendarComponent } from './calendar.component';

const routes: Routes = Route.withShell([
  { path: 'calendar',
    component: CalendarComponent,
    data: {
      title: extract('calendar_length')
    }
  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CalendarRoutingModule { }
