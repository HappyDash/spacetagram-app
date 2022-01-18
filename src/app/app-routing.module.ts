import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronomyComponent } from './components/astronomy/astronomy.component';
import { MarsRoverComponent } from './components/mars-rover/mars-rover.component';
import { MoonLandingComponent } from './components/moon-landing/moon-landing.component';

const routes: Routes = [
  { path: 'rover', component: MarsRoverComponent },
  { path: 'astronomy', component: AstronomyComponent },
  { path: 'moon', component: MoonLandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
