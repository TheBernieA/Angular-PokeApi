import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from 'src/app/models/pokemon';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon!: IPokemon;

  constructor(
    private service: ServiceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let pokeId: any = this.router.snapshot.params['id'];
    this.service
      .getPokemonById(pokeId)
      .subscribe(data => this.pokemon = data);
  }
}
