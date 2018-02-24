import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

import { LocationProvider } from '../../providers/location/location';
import { HttpsProvider } from '../../providers/https/https';




declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, private nativeGeocoder: NativeGeocoder, public LocationProvider:LocationProvider,public HttpsProvider:HttpsProvider) {

  }
  
  city
  lat
  long
  todayWeather
  weatherDescription

  ionViewDidLoad(){
    this.HttpsProvider.getWeather().then((data) => {
      
      console.log(data["list"])
      console.log(data["list"][0]["weather"][0]["icon"])

      this.todayWeather = data["list"][0]["weather"][0]["main"]
      this.weatherDescription = data["list"][0]["weather"][0]["description"]


    });
    this.loadMap();
  }
 
  loadMap(){
    this.LocationProvider.getPosition().then((position) => {

      console.log(position)

      this.lat = position[0]
      this.long = position[1]
 
    let latLng = new google.maps.LatLng(this.lat, this.long);
 
    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    //--marker--
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: 'Hello World!'
    });

    //--Geocoder
    this.nativeGeocoder.reverseGeocode(this.lat, this.long)
      .then((result: NativeGeocoderReverseResult) => {
        console.log(JSON.stringify(result)),
        this.city = result.locality;
      })
      .catch((error: any) => console.log(error));

    this.nativeGeocoder.forwardGeocode('Berlin')
      .then((coordinates: NativeGeocoderForwardResult) => console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
      .catch((error: any) => console.log(error));

 
  })
}
}
