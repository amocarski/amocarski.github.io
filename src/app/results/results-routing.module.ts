import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { ResultsComponent } from './results.component';

const routes: Routes = Route.withShell([
  { path: 'results',
    component: ResultsComponent,
    data: {
      title: extract('Results')
    }
  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ResultsRoutingModule { }
