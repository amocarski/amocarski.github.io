import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { I18nService } from '../core/i18n.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  races: any;
  ascending = true;
  isLoading = true;

  constructor( private http: Http,
              private i18nService: I18nService) {}

  ngOnInit() {
    this.loadRaces();
  }

  loadRaces() {
      this.http.get('assets/calendar.json')
          .subscribe(res => {
              this.races = res.json();
              this.isLoading = false;
          });
  }

}
