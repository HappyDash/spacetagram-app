import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarsRoverComponent } from './components/mars-rover/mars-rover.component';
import { AstronomyComponent } from './components/astronomy/astronomy.component';
import { MoonLandingComponent } from './components/moon-landing/moon-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    MarsRoverComponent,
    AstronomyComponent,
    MoonLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
