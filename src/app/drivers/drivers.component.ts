import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { I18nService } from '../core/i18n.service';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  drivers: any;
  order = 'lastname';
  ascending = true;

  constructor(private http: Http,
              private i18nService: I18nService) { }

  ngOnInit() {
    this.loadDrivers();
  }

  loadDrivers() {
    this.drivers = this.http.get('assets/drivers.json')
      .pipe(
        map((res: Response) => res.json()),
        catchError(() => of('Error, could not fetch data'))
      );
  }

  get currentLanguage() {
    return this.i18nService.language;
  }

}
