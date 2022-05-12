import { Injectable } from "@angular/core";
import { New } from "src/app/pages/news/interfaces/new.interface";


@Injectable(
    { providedIn: 'root'}
)
export class UpdateTimeService{

    updateLastTimeUpdated(news: New[], favState: boolean):void{
        this.getHoursDifference(news,favState);
    }

    private getHoursDifference(news: New[], favState: boolean):void{
        news = news.filter(function(post) {
            let validPost = false;
            if(post.story_title!==null && post.story_url!==null && post.created_at!=="")
                validPost = true;
            return validPost;
        })

        const dateTimeNow = new Date();
        news.forEach(function(n){
            const lastUpdated = new Date(n.created_at);
            let lastTimeUpdated = 0;
            lastTimeUpdated = Math.round((dateTimeNow.getTime() - lastUpdated.getTime())/(1000 * 60 * 60));

            let result:string = '';
            if (lastTimeUpdated < 1){
                lastTimeUpdated = Math.round(lastTimeUpdated*60);
                if (lastTimeUpdated > 1)
                    result=" mins ago ";
                else
                    result=" min ago ";
            }else{
                if (lastTimeUpdated > 23){
                    lastTimeUpdated = Math.round(lastTimeUpdated/24);
                    if (lastTimeUpdated > 1)
                        result=" days ago ";
                    else
                        result=" day ago ";
                }else{
                    if (lastTimeUpdated > 1)
                        result=" hours ago ";
                    else
                        result=" hour ago ";
                }
            }
            n.lastTimeUpdated = lastTimeUpdated.toString() + result;
            n.isFavourite = favState;
        })
    }   
}


