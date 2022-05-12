import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { New } from '../interfaces/new.interface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Input() newU!: New;
  @Output() addToFavClick = new EventEmitter<New>(); 
  constructor() { }

  ngOnInit(): void {

  }

  onClick(): void{
    this.addToFavClick.emit(this.newU);
  }

}
