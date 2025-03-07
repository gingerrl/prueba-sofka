import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter();

  constructor(private router: Router) {}

  onButtonAdd() {
    this.router.navigate(['/form']);
  }

  onInputSearch(e: any) {
    this.searchEvent.emit(e);
  }
}
