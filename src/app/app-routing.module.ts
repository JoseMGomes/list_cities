import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { ListCityComponent } from './_components/list-city/list-city.component';
import { FormCityComponent } from './_components/form-city/form-city.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-city', component: ListCityComponent },
  { path: 'form-city', component: FormCityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
