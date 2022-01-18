import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moon-landing',
  templateUrl: './moon-landing.component.html',
  styleUrls: ['./moon-landing.component.scss']
})
export class MoonLandingComponent implements OnInit {

  private app_data: Array<any> = [];

  constructor(){

  }

  ngOnInit(){
    
    fetch("https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image&photographer=NASA/Connie Moore")
    .then(response => response.json())
    .then((data: any) => {
      this.app_data = data['collection']['items'];
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
