import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path:'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'movie/:id',
    component: MovieDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
