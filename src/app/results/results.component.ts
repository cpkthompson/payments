import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  q = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.q = this.activatedRoute.snapshot.queryParams.q;
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.q = queryParams.q;
    });
  }

}
