import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpsProvider } from '../../providers/https/https';

import { WeatherDetailsPage } from '../../pages/weather-details/weather-details';



/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public HttpsProvider:HttpsProvider) {
  }
  weatherArray
  todayDate

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
    this.HttpsProvider.getWeather().then((data) => {
      
      console.log(data["list"])
      console.log((new Date(data["list"][0]["dt"] * 1000)).getDate())
      console.log((new Date()).getDate())

      this.todayDate = (new Date()).getTime()

      this.weatherArray = data["list"]


    })
  }

  details(weather){
    console.log(weather)
    this.navCtrl.push(WeatherDetailsPage,{weather:weather})
  }

}
