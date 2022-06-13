import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { PokemonDetailsComponent } from './page-container/pokemon-details/pokemon-details.component';
import { HomeComponent } from './page-container/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageContainerComponent,
    PokemonDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
