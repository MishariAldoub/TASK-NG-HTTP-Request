import { Component, effect, inject, signal } from '@angular/core';
import { PetsHeaderComponent } from '../../components/pets-header/pets-header.component';
import { PetsListComponent } from '../../components/pets-list/pets-list.component';
// import { Pets } from '../../../data/pets';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { PetsService } from '../../shared/services/pets.service';
import { Pet } from '../../../data/pets';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [PetsHeaderComponent, HttpClientModule, NgFor, PetsListComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent {
  query = '';
  allPets: any[] = [];
  private http = inject(HttpClient);
  private petservice = inject(PetsService);

 
  // pets = signal<Pet[]>([]);
  // error = signal<string | null>(null);

  // constructor() {
  //   effect(() => {
  //     this.http
  //       .get<any[]>('https://pets-react-query-backend.eapi.joincoded.com/pets')
  //       .subscribe((data) => {
  //         console.log('Fetched data: ', data);
  //         this.allPets = data;
  //       });
  //   });
  // }
 constructor() {
    effect(() => {
      this.petservice.getPets().subscribe((response) => {
        this.allPets = response as unknown as Pet[];
        console.log(response);
      });
    });
  }
  // private init = effect(() => {
  //   this.service.getPets().subscribe({
  //     next: (data) => this.pets.set(data),
  //     error: () => this.error.set('Failed to load posts.'),
  //   });
  // });
  get filteredPets() {
    return this.allPets.filter((pet) =>
      pet.name.toLowerCase().includes(this.query.toLowerCase())
    );
  }
  setQuery(query: string) {
    this.query = query;
  }
}
