import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, retry, throwError } from 'rxjs';
import { IPokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private url = 'https://pokeapi.co/api/v2/pokemon/';

  pokemons:BehaviorSubject<IPokemon[]> = new BehaviorSubject<IPokemon[]>([]);

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<IPokemon> {
    const id = Math.round(Math.random() * 898)
    return this.http.get<IPokemon>(`${this.url}${id}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  nextPokemon(pokemon: IPokemon[]):void{
    this.pokemons.next(pokemon)
  }

  getPokemonById(id:number):Observable<IPokemon>{
    return this.http.get<IPokemon>(`${this.url}${id}`).pipe(
      retry(3),
      catchError(this.handleError)
    )

  }

  deletePokemon(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      catchError(this.handleError) )
  }

  updateLocalStorage(pokemon:IPokemon[]):void{
    let pokeData = JSON.parse(localStorage.getItem('pokemon')!)
    if(pokeData){
      pokeData = {...pokeData, ...pokemon};
      localStorage.setItem('pokemon', JSON.stringify(pokeData))
    }else{
      localStorage.setItem('pokemon', JSON.stringify(pokemon))
  }
}



  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error('Error occured', error.error.message);
      
  }else{
    console.error(`backend error status ${error.status} ` + `body${error.error.message}`);
    
  }
  return throwError('something went wrong')
}

}
