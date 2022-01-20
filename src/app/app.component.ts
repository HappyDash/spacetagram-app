import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Spacetagram';
  public currentNav = 'mars';

  setCurrentNav(nav: string) {
    this.currentNav = nav;
  }
}
