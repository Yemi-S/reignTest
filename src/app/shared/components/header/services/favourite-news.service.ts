import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { New } from "src/app/pages/news/interfaces/new.interface";


@Injectable(
    { providedIn: 'root'}
)
export class FavouriteNewsService{
    favNews: New[] = [];
    private preferenceSubject = new BehaviorSubject<New[]>([]);
    private totalSubject = new BehaviorSubject<number>(0);

    get preferenceAction$():Observable<New[]>{
        return this.preferenceSubject.asObservable();
    }
    get totalAction$():Observable<number>{
        return this.totalSubject.asObservable();
    }

    updateFav(n: New): void{
        this.addToFav(n);
    }

    private addToFav(n: New):void{
        const isNewAlrFav = this.favNews.find(({story_id})=>story_id==n.story_id)
        if (!isNewAlrFav){
            n.isFavourite = true;
            this.favNews.push({ ...n});
        }
        this.preferenceSubject.next(this.favNews);
    }

}