import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-area',
  templateUrl: './filter-area.component.html',
  styleUrls: ['./filter-area.component.css']
})
export class FilterAreaComponent implements OnInit {
  favoriteNews: string = 'all';
  @Output() doFilter = new EventEmitter<any>(); 
  constructor() { }

  ngOnInit(): void {
  }

  public onValChange(val: string): void {
    this.favoriteNews = val;
    this.doFilter.emit(this.favoriteNews);
  }

}
