import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { New } from '../interfaces/new.interface';
import { Information } from '../interfaces/information.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiURL = 'https://hn.algolia.com/api/v1/search_by_date?query=';
  private lastPartURL = '&page='
  private defaultLanguaje = 'angular';
  private defaultPage = '0';

  constructor(private http: HttpClient) { }

  getNews(): Observable<Information>{
    const url = this.apiURL + this.defaultLanguaje + this.lastPartURL + this.defaultPage;
    return this.http.get<Information>(url);
  }

  getNewsByLanguage(language:string): Observable<Information>{
    const url = this.apiURL + language + this.lastPartURL + this.defaultPage;
    return this.http.get<Information>(url);
  }

  getNewsByLanguagePage(page:string, language:string): Observable<Information>{
    const url = this.apiURL + language + this.lastPartURL + page;
    return this.http.get<Information>(url);
  }
  
}
