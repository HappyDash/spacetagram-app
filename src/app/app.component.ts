import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Spacetagram';
  public currentNav = '';

  constructor(private router: Router ) {
    if(this.router.url == '/'){
      this.currentNav = 'mars';
    }
    this.router.events
    .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
    .subscribe(event => {
      if (
        event.id === 1 &&
        event.url === event.urlAfterRedirects 
      ) {
       this.router.navigate(['/']);
      }
    })
  }
  setCurrentNav(nav: string) {
    this.currentNav = nav;
  }
  
}
