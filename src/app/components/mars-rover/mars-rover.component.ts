import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
export class MarsRoverComponent implements OnInit {

  private app_data = "";

  constructor(){

  }

  ngOnInit(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=tRYvM2jwXikKvc4wbYHEsSHfBpvyaqZghCX8sheG")
    .then(response => response.json())
    .then((data: any) => {
      this.app_data = data["photos"];
      console.log(this.app_data);
    });
  }

}
