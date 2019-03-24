import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results: any;
  isLoading = true;

  constructor(private http: Http) {}

  ngOnInit() {
    this.loadResults();
  }

  loadResults() {
      const timestamp = new Date().getTime();
      this.http.get('assets/results.json?v=' + timestamp)
          .subscribe(res => {
              this.results = res.json();
              this.isLoading = false;
          });
  }

}
