import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  constructor() { }
  @Output() searchEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }
 
  search() {
    this.searchEvent.emit(this.searchText);
  }

}
