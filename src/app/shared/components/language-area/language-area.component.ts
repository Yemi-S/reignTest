import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Information } from 'src/app/pages/news/interfaces/information.interface';

@Component({
  selector: 'app-language-area',
  templateUrl: './language-area.component.html',
  styleUrls: ['./language-area.component.css']
})
export class LanguageAreaComponent implements OnInit {
  selectedValue = 'angular';
  @Output() selectLanguage = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }
  onChange(): void{
    this.selectLanguage.emit(this.selectedValue);
    //console.log(this.selectedValue)
  }

}
