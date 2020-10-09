import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';


const routes: Routes = [
  {path: 'blog' , component: BlogComponent},
  {path: 'post/:id' , component: PostComponent},
  {path: '**' , pathMatch: 'full', redirectTo: 'blog'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
