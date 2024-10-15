import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCityComponent } from './_components/list-city/list-city.component';
import { FormCityComponent } from './_components/form-city/form-city.component';

const routes: Routes = [
  { path: 'list-city', component: ListCityComponent },
  { path: 'add-city', component: FormCityComponent },
  { path: 'edit-city/:id', component: FormCityComponent },
  { path: '', redirectTo: 'list-city', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
