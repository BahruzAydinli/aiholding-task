import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleUpdateComponent } from './pages/article-update/article-update.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UserUpdateComponent } from './pages/user-update/user-update.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/update/:id',
    component: UserUpdateComponent,
  },
  {
    path: 'users/new',
    component: UserUpdateComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'articles/update/:id',
    component: ArticleUpdateComponent,
  },
  {
    path: 'articles/new',
    component: ArticleUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
