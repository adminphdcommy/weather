import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WeatherDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather-details',
  templateUrl: 'weather-details.html',
})
export class WeatherDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.weather = this.navParams.get("weather")
    console.log(this.weather)
  }

  weather

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherDetailsPage');
   
  }

}
