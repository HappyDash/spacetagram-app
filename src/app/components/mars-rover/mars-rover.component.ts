import { Component, OnInit } from '@angular/core';
import { MarsRoverData, MarsRoverPhotosData } from '../../models/mars-rover.interface';

@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
export class MarsRoverComponent implements OnInit {

  private app_data: Array<MarsRoverPhotosData> = [];

  constructor(){

  }

  ngOnInit(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=tRYvM2jwXikKvc4wbYHEsSHfBpvyaqZghCX8sheG")
    .then(response => response.json())
    .then((data: MarsRoverData) => {
      this.app_data = data['photos'];
      this.setLikeDislikes();
    });
    fetch("https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image&photographer=NASA/Connie Moore")
    .then(response => response.json())
    .then((data: MarsRoverData) => {
      // this.app_data = data['photos'];
      // this.setLikeDislikes();
      console.log(data);
    });
    //NASA/Connie Moore
  }

  getAppData() {
    return this.app_data;
  }

  setLikeDislikes(){

  }

  likeDislike(id: number) {
    console.log(id)
  }

}
