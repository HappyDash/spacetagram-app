import { Component, OnInit } from '@angular/core';
import { LikesObject } from 'src/app/models/mars-rover.interface';

@Component({
  selector: 'app-moon-landing',
  templateUrl: './moon-landing.component.html',
  styleUrls: ['./moon-landing.component.scss']
})
export class MoonLandingComponent implements OnInit {

  private app_data: Array<any> = [];

  private likesArray: LikesObject = {};

  constructor(){

  }

  ngOnInit(){
    
    fetch("https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image&photographer=NASA/Connie Moore")
    .then(response => response.json())
    .then((data: any) => {
      this.app_data = data['collection']['items'];
      this.setLikeDislikes();
      console.log(data);
    });
    //NASA/Connie Moore
  }

  getAppData() {
    return this.app_data;
  }

  setLikeDislikes(){
    this.app_data.forEach((img: any) => {
      if(localStorage.getItem(img.data[0].nasa_id.toString()))
        this.likesArray[img.data[0].nasa_id.toString()] = true;
    })
    //if(localStorage.getItem())
  }

  likeDislike(id: number) {
    this.likesArray[id.toString()] = !this.likesArray[id.toString()];
    if(!this.likesArray[id.toString()]){
      localStorage.removeItem(id.toString());
    }
    else {
      localStorage.setItem(id.toString(), 'liked');
    }
  }

  imageLiked(id: number): boolean{
    return this.likesArray[id.toString()];
  }

}
