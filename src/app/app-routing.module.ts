import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './page-container/home/home.component';
import { PokemonDetailsComponent } from './page-container/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: PokemonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
