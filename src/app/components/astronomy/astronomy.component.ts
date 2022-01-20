import { Component, OnInit } from '@angular/core';
import { LikesObject } from 'src/app/models/mars-rover.interface';

@Component({
  selector: 'app-astronomy',
  templateUrl: './astronomy.component.html',
  styleUrls: ['./astronomy.component.scss']
})
export class AstronomyComponent implements OnInit {
  private astro_data: Array<any> = [];
  private likesArray: LikesObject = {};

  constructor() { }

  ngOnInit(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=tRYvM2jwXikKvc4wbYHEsSHfBpvyaqZghCX8sheG&count=4")
    .then(response => response.json())
    .then((data: any) => {
      this.astro_data = data;
      this.setLikeDislikes();
    });
  }

  getAppData() {
    return this.astro_data;
  }

  setLikeDislikes(){
    this.astro_data.forEach((img: any) => {
      if(localStorage.getItem(img.date.toString()))
        this.likesArray[img.date.toString()] = true;
    });
  }

  likeDislike(date: string) {
    this.likesArray[date.toString()] = !this.likesArray[date.toString()];
    if(!this.likesArray[date.toString()]){
      localStorage.removeItem(date.toString());
    }
    else {
      localStorage.setItem(date.toString(), 'yes');
    }
  }

  imageLiked(date: number): boolean{
    return this.likesArray[date.toString()];
  }

}
