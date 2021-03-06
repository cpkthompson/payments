import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  executeSearch(searchForm: NgForm): void {
    this.router.navigate(['/results'], {
      queryParams: {
        q: searchForm.value.q
      }
    });
  }
}
