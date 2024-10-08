import { Component, OnInit } from '@angular/core';
import { City } from '../../City';
import { CityService } from '../../city.service';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css'],
})
export class ListCityComponent implements OnInit {
  public cities: City[] = [];

  constructor(private service: CityService) {}

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(): void {
    this.service.getCity().subscribe(
      (data: City[]) => {
        this.cities = data;
      },
      (error) => {
        console.error('Erro ao buscar dados', error);
      }
    );
  }

  delete(id: number):void {
    this.service.delete(id).subscribe({
      next: () => this.loadCities(),
    });
  }
}
