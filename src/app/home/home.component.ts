import {Http, Response} from '@angular/http';
import {map, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {DomSanitizer} from '@angular/platform-browser';

import {Component, OnInit, OnDestroy} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

interface Event {
  circuit: string;
  name: string;
  date: string;
  isStream: boolean;
  streamURL: string;
  isLT: boolean;
  lt: String[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  event: Event;
  isLoading: boolean;
  days: number;
  hours: string;
  minutes: string;
  seconds: string;
  currentDate: Date;
  timeInterval: number;
  results: any;
  streamURL: any;
  liveTimingURL: any[] = [];
  d2: boolean;
  d3: boolean;
  ltToggler: number = 0;

  constructor(private http: Http,
              public sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.isLoading = true;
    this.loadEventDetails();
    this.loadResults();
    this.d2 = true;
    this.d3 = false;
  }

  ngOnDestroy() {
    clearInterval(this.timeInterval);
  }

  getTimeRemaining(endtime: string) {
    this.currentDate = new Date();
    const t = Date.parse(endtime) - Date.parse(this.currentDate.toString());

    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  updateClock(endtime: string) {
    const t = this.getTimeRemaining(endtime);

    this.days = t.days;
    this.hours = ('0' + t.hours).slice(-2);
    this.minutes = ('0' + t.minutes).slice(-2);
    this.seconds = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(this.timeInterval);
    }
  }

  initializeClock(endtime: string) {
    this.timeInterval = window.setInterval(() => {
      this.updateClock(endtime);
    }, 1000);
  }

  loadEventDetails() {
    this.http.get('assets/next-race.json')
      .subscribe((res: Response) => {
        this.event = res.json();
        this.initializeClock(this.event.date);
        if (this.event.isStream) {
          this.getStreamURL(this.event.streamURL);
        }
        if (this.event.isLT) {
          this.getLiveTimingURL(this.event.lt);
        }

      }, error => {
        catchError(() => of('Error, could not fetch data'));
      });
  }

  loadResults() {
    this.results = this.http.get("assets/results.json")
      .pipe(
        map((res: Response) => res.json().slice(0, 3)),
        catchError(() => of('Error, could not fetch data'))
      );
  }

  getStreamURL(streamURL: any) {
    this.streamURL = this.sanitizer.bypassSecurityTrustResourceUrl(streamURL);
  }

  getLiveTimingURL(liveTimingURL: any) {
    for (let value of liveTimingURL) {
      this.liveTimingURL.push(this.sanitizer.bypassSecurityTrustResourceUrl(value));
    }
  }

  // setIframeHeight(iframe) {
  //   if (iframe) {
  //     const iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
  //     if (iframeWin.document.body) {
  //       iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
  //       console.log(iframe.height);
  //     }
  //   }
  // }

  toggleLT(div: number) {
    this.ltToggler = div;
  }
}
