export interface IPokemon {
  id: number;
  name: string;
  url: string;
  details: string;
  weight: string;
  height: string;
  sprites: Sprite;
  moves: Moves[];
  types: Type[];
}

export interface Sprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Moves {
  move: Move;
}
export interface Move {
  name: string;
}
export interface Type{
    type: Move;

}