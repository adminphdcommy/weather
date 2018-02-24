import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

  constructor( public geolocation:Geolocation) {
    console.log('Hello LocationProvider Provider');
  }

  position

  getPosition(){
    return new Promise(resolve => {
      this.geolocation.getCurrentPosition().then((position) => {
        console.log(position)
        this.position = [position.coords.latitude, position.coords.longitude]
        resolve(this.position)

      })
      .catch(e =>{
        console.log(e)
      });
    })
  }

}
