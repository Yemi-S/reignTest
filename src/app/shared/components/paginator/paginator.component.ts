import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  pages: string[] = [];
  pageSelected: string = "1";
  start: string = "start";
  end: string = "end";
  @Output() changePage = new EventEmitter<string>(); 

  constructor() {
    this.pages.push("<");
    for(let i=1;i<10;i++){
      this.pages.push(i.toString());
    }
    this.pages.push(">");
  }

  ngOnInit(): void {
  }

  public onPageChange(val: string): void {
   // console.log("this.pageSelected: ",  this.pageSelected)
    this.pageSelected = val;
    this.changePage.emit(val);
  }
}
