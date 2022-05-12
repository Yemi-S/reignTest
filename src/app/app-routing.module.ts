import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'news', loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule) },
  { path: '**',redirectTo:'',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
