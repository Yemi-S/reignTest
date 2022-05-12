import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FavouriteNewsService } from 'src/app/shared/components/header/services/favourite-news.service';
import { UpdateTimeService } from 'src/app/shared/components/header/services/update-time.service';
import { LanguageAreaComponent } from 'src/app/shared/components/language-area/language-area.component';
import { Information } from './interfaces/information.interface';
import { New } from './interfaces/new.interface';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})


export class NewsComponent implements OnInit {
  news: New[]=[];
  newsSectionA: New[]=[];
  newsSectionB: New[]=[];
  preference$ = this.favouriteNewsSvc.preferenceAction$;
  isFilter: boolean = false;
  favNewsSectionA: New[]=[];
  favNewsSectionB: New[]=[];
  actualLanguage: string = "angular";
  actualPage: string = "0";

  constructor(private newSvc: NewsService,
              private updateTimeSvc: UpdateTimeService,
              private favouriteNewsSvc: FavouriteNewsService
    ) { 

  }

  ngOnInit(): void {
    this.newSvc.getNews()
    .pipe(
      tap ( (res: Information) => this.news = res.hits),
      tap ( () => this.updateTimeSvc.updateLastTimeUpdated(this.news,false)),
      tap ( (res: Information) => this.newsSectionA = res.hits.slice(0,4)),
      tap ( () => this.updateTimeSvc.updateLastTimeUpdated(this.newsSectionA,false)),
      tap ( (res: Information) => this.newsSectionB = res.hits.slice(4,8)),
      tap ( () => this.updateTimeSvc.updateLastTimeUpdated(this.newsSectionB,false)),
    )
    .subscribe();
  }

  makeQuery(language: any): void{
    this.actualLanguage = language;
    this.newSvc.getNewsByLanguage(language)
    .pipe(
      tap ( (res: Information) => this.news = res.hits),
      tap ( () => this.updateTimeSvc.updateLastTimeUpdated(this.news,false)),
      tap ( () => this.newsSectionA = this.news.slice(0,4)),
      tap ( () => this.newsSectionB = this.news.slice(4,8)),
    )
    .subscribe();
  }

  addToFav(n: New): void{
    //console.log('Add to fav', n);
    this.favouriteNewsSvc.updateFav(n);
  }

  showFavs(filter:any):void {
    //console.log("showFavs")
    this.preference$
      .pipe(
        tap(res => console.log(res)),
      ).subscribe()

    if (filter == "faves"){
        this.preference$
        .pipe(
          tap ( res => this.favNewsSectionA = res.slice(0,4)),
          tap ( () => this.updateTimeSvc.updateLastTimeUpdated(this.favNewsSectionA,true)),
          tap ( res => this.favNewsSectionB = res.slice(4,8)),
          tap ( () => this.updateTimeSvc.updateLastTimeUpdated(this.favNewsSectionB,true)),
        )
        .subscribe()
        this.isFilter = true;  
    } else{
        this.isFilter = false;
          //  console.log('Make query', language);
        this.newSvc.getNewsByLanguage("angular")
        .pipe(
          tap ( (res: Information) => this.news = res.hits),
          tap ( () => this.updateTimeSvc.updateLastTimeUpdated(this.news,false)),
          tap ( () => this.newsSectionA = this.news.slice(0,4)),
          tap ( () => this.newsSectionB = this.news.slice(4,8)),
        )
        .subscribe();
    }
  }
  makeQueryByPage(pageSelected: any): void{
    let pageNumber = Number(pageSelected)
    if(pageSelected === "start")
        pageNumber = 0;
    else{
      if(pageSelected === "end")
        pageNumber = 9;
      else
        pageNumber = pageNumber - 1;
    }

    this.newSvc.getNewsByLanguagePage(pageNumber.toString(),this.actualLanguage)
    .pipe(
      tap ( (res: Information) => this.news = res.hits),
      tap ( () => this.updateTimeSvc.updateLastTimeUpdated(this.news,false)),
      tap ( () => this.newsSectionA = this.news.slice(0,4)),
      tap ( () => this.newsSectionB = this.news.slice(4,8)),
    )
    .subscribe();
  }
}
