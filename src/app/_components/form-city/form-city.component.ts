import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../../city.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { City } from '../../City';

@Component({
  selector: 'app-form-city',
  templateUrl: './form-city.component.html',
  styleUrls: ['./form-city.component.css'],
})
export class FormCityComponent {
  FormGroupCity: FormGroup;
  isEditing: boolean = false;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private service: CityService,
    private formBuilder: FormBuilder
  ) {
    this.FormGroupCity = this.formBuilder.group({
      id: [null],
      name: [''],
      population: [null],
      state: [''],
      area: [null],
      famous_landmark: [''],
    });

    const cityId = this.activeRoute.snapshot.params['id'];
    if (cityId) {
      this.isEditing = true;
      this.loadCity(cityId);
    }
  }


  loadCity(id: number) {
    this.service.getCityById(id).subscribe((city: City) => {
      this.FormGroupCity.patchValue(city);
    });
  }


  update() {
    if (this.isEditing) {
      console.log('Atualizando cidade', this.FormGroupCity.value);
      this.service.update(this.FormGroupCity.value).subscribe({
        next: () => {
          this.router.navigate(['list-city']);
        },
        error: (err) => {
          console.error('Erro ao atualizar cidade', err);
        },
      });
    } else {
      const newCity = { ...this.FormGroupCity.value };
      delete newCity.id;
      console.log('Criando nova cidade', newCity);

      this.service.create(newCity).subscribe({
        next: (createdCity: City) => {
          console.log('Cidade criada', createdCity);
          this.router.navigate(['list-city']);
        },
        error: (err) => {
          console.error('Erro ao criar cidade', err);
        },
      });
    }
  }
}
