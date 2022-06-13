import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/models/pokemon';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemon!: IPokemon;
  capture: IPokemon[] = [];
  refuse: IPokemon[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.service.getPokemons().subscribe(data => this.pokemon = data)
    }

    captured(pokemon:any){

      if(this.capture.length <= 6){
        this.capture.push(this.pokemon);
        this.service.updateLocalStorage(this.capture)
      }
    }
    refused(pokemon:any){
      this.refuse.push(this.pokemon);
    }

    getPokemon(isCaptured: boolean):void{
      const pokemon = {
        pokemon: this.pokemon,
        isCaptured: isCaptured
      }
      isCaptured ? this.captured(pokemon) : this.refused(pokemon)

      const newPokemons = [...this.capture, ...this.refuse]

      this.service.nextPokemon(newPokemons)
      this.service.getPokemons().subscribe(pokemon => this.pokemon = pokemon)     
    }

    // onDelete():void{
    //   this.service.deletePokemon(this.pokemon.id).subscribe(() => console.log('deletePokemon')
    //    )
    // }
    onDeleted(pokemon: any):void{
      const index = this.capture.indexOf(pokemon)
      this.capture.splice(index, 1)
    }
  

}
