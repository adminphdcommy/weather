import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationProvider } from '../../providers/location/location';


/*
  Generated class for the HttpsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpsProvider {

  constructor(public http: HttpClient,public LocationProvider:LocationProvider) {
    console.log('Hello HttpsProvider Provider');
    
  }

  weatherArray
  lat
  long
  
  getWeather(){
    

      return new Promise(resolve => {
        this.LocationProvider.getPosition().then((position) => {

          console.log(position)
    
          this.lat = position[0]
          this.long = position[1]
          console.log("http://api.openweathermap.org/data/2.5/forecast/daily?lat="+this.lat+"&lon="+this.lat+"&cnt=10&appid=9fd7a449d055dba26a982a3220f32aa2")

        this.http.get(
          "http://api.openweathermap.org/data/2.5/forecast/daily?lat="+this.lat+"&lon="+this.lat+"&cnt=10&appid=9fd7a449d055dba26a982a3220f32aa2"
        )
          .subscribe(data => {
            this.weatherArray = data
            console.log(data);
            resolve(data);
           }, err => {
             console.log(err);
             
           });
      });


    });

    

    
 }

}
