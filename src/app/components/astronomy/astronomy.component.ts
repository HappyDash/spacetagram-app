import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-astronomy',
  templateUrl: './astronomy.component.html',
  styleUrls: ['./astronomy.component.scss']
})
export class AstronomyComponent implements OnInit {
  private astro_data: Array<any> = [];
  constructor() { }

  ngOnInit(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=tRYvM2jwXikKvc4wbYHEsSHfBpvyaqZghCX8sheG&count=4")
    .then(response => response.json())
    .then((data: any) => {
      this.astro_data = data;
      console.log(data);
      //this.setLikeDislikes();
    });
  }

  getAppData() {
    return this.astro_data;
  }

  setLikeDislikes(){

  }

  likeDislike(date: string) {
    console.log(date)
  }

}
