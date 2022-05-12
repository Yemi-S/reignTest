import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewComponent } from './new/new.component';
import { MaterialModule } from 'src/app/material.module';
import { FilterAreaComponent } from 'src/app/shared/components/filter-area/filter-area.component';
import { LanguageAreaComponent } from 'src/app/shared/components/language-area/language-area.component';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';


@NgModule({
  declarations: [
    NewsComponent,
    NewComponent,
    FilterAreaComponent,
    LanguageAreaComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class NewsModule { }
