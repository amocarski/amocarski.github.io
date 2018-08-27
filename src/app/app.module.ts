import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ResultsModule } from './results/results.module';
import { DriversModule } from './drivers/drivers.module';
import { ContactModule } from './contact/contact.module';
import { CalendarModule } from './calendar/calendar.module';
import { PressModule } from './press/press.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    AppRoutingModule,
    ResultsModule,
    DriversModule,
    ContactModule,
    CalendarModule,
    PressModule
  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
