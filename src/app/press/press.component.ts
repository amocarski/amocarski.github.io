import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { I18nService } from '../core/i18n.service';


@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  pressReleases: any;
  order = 'date';
  ascending = true;

  constructor(private http: Http,
              private i18nService: I18nService) { }

  ngOnInit() {
    this.loadPress();
  }

  loadPress() {
    this.pressReleases = this.http.get('assets/press.json')
      .pipe(
        map((res: Response) => res.json()),
        catchError(() => of('Error, could not fetch data'))
      );
  }

  get currentLanguage() {
    return this.i18nService.language;
  }

}
