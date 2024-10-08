import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { ListCityComponent } from './_components/list-city/list-city.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-city', component: ListCityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
