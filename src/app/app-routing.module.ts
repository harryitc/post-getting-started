import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './post/create/create.component';
import { UpdateComponent } from './post/shared/action/update/update.component';
import { DetailComponent } from './post/shared/action/detail/detail.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: 'post', component: PostComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/update', component: UpdateComponent },
  { path: 'post/detail', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }