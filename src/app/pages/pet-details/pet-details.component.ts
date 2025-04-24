import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet, pets } from '../../../data/pets';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PetsService } from '../../shared/services/pets.service';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {
  pet: Pet | null = null;
  pets = pets;
  private http = inject(HttpClient);
  private petservice = inject(PetsService);
  
  constructor(private route: ActivatedRoute, public router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // const foundPet = pets.find((p) => p.id === id);
    effect(() => {
      this.petservice.getAPet(id).subscribe((response) => {
        this.pet = response;
        console.log(id);
      });
    });
    // if (!foundPet) {
    //   this.router.navigate(['/pets']);
    // } else {
    //   this.pet = foundPet;
    // }
  }
}
