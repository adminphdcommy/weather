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
    this.todayWeather = this.weather["weather"][0]["main"]
    this.weatherDescription = this.weather["weather"][0]["description"]
    this.dayTemperature = this.weather["temp"]["day"]
    this.eveTemperature = this.weather["temp"]["eve"]
    this.nightTemperature = this.weather["temp"]["night"]
    this.Humidity = this.weather["humidity"]
    this.Pressure = this.weather["pressure"]
    this.Speed = this.weather["speed"]
    console.log(this.weather)
    console.log(this.todayWeather)
    console.log(this.weatherDescription)
    if(this.todayWeather == 'Clouds'){
      this.bgImg = 'card-background-page-cloud'
    }
    if(this.todayWeather == 'Rain'){
      this.bgImg = 'card-background-page-rain'
    }
    if(this.todayWeather == 'Clear'){
      this.bgImg = 'card-background-page-clear'
    }
  }

  bgImg
  weather
  todayWeather
  weatherDescription
  dayTemperature
  eveTemperature
  nightTemperature
  Humidity
  Pressure
  Speed

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherDetailsPage');
   
  }

}
