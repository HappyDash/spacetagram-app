import { Component, OnInit } from '@angular/core';
import { LikesObject, MarsRoverData, MarsRoverPhotosData } from '../../models/mars-rover.interface';

@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
export class MarsRoverComponent implements OnInit {

  private app_data: Array<MarsRoverPhotosData> = [];

  private likesArray: LikesObject = {};

  constructor(){
    localStorage.setItem('mars_likes', JSON.stringify([]));
  }

  ngOnInit(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=tRYvM2jwXikKvc4wbYHEsSHfBpvyaqZghCX8sheG")
    .then(response => response.json())
    .then((data: MarsRoverData) => {
      this.app_data = data['photos'];
      console.log(this.app_data)
      this.setLikeDislikes();
    });
  }

  getAppData() {
    return this.app_data;
  }

  setLikeDislikes(){
    this.app_data.forEach((img: MarsRoverPhotosData) => {
      if(localStorage.getItem(img.id.toString()))
        this.likesArray[img.id.toString()] = true;
    })
    //if(localStorage.getItem())
  }

  likeDislike(id: number) {
    this.likesArray[id.toString()] = !this.likesArray[id.toString()];
    if(!this.likesArray[id.toString()]){
      localStorage.removeItem(id.toString());
    }
    else {
      localStorage.setItem(id.toString(), 'yes');
    }
  }

  imageLiked(id: number): boolean{
    return this.likesArray[id.toString()];
  }

}
