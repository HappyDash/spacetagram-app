import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarsRoverComponent } from './components/mars-rover/mars-rover.component';

const routes: Routes = [
  { path: 'rover', component: MarsRoverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
