import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  drivers: any;

  constructor(private http: Http) { }

  ngOnInit() {
    // $(window).trigger('resize').trigger('scroll');

    // this.loadDrivers();
  }

  loadDrivers() {
    // this.drivers = this.http.get("assets/drivers.json")
    //   .map(res => res.json());
  }

}
