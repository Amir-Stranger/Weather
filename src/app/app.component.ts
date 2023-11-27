import { Component } from '@angular/core';
import {CurrentWeatherService} from "./services/current-weather.service";
import {CurrentWeatherModel} from "./shared/models/current-weather";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentData!: CurrentWeatherModel;

  data: any = {
    location: {
      name: 'Tehran',
      region: 'Tehran',
      country: 'Iran',
      lat: 35.73,
      lon: 51.33,
      tz_id: 'Asia/Tehran',
      localtime_epoch: 1701109204,
      localtime: '2023-11-27 21:50'
    },
    current: {
      last_updated_epoch: 1701108900,
      last_updated: '2023-11-27 21:45',
      temp_c: 15.0,
      temp_f: 59.0,
      is_day: 0,
      condition: {
        text: 'Partly cloudy',
        icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
        code: 1003
      },
      wind_mph: 4.3,
      wind_kph: 6.8,
      wind_degree: 40,
      wind_dir: 'NE',
      pressure_mb: 1013.0,
      pressure_in: 29.92,
      precip_mm: 0.01,
      precip_in: 0.0,
      humidity: 39,
      cloud: 50,
      feelslike_c: 15.8,
      feelslike_f: 60.4,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 1.0,
      gust_mph: 2.1,
      gust_kph: 3.3
    }
  }

  constructor(private currentWeatherService: CurrentWeatherService) {
    this.currentData = this.data;
    // currentWeatherService.getCurrent('Tehran').subscribe(res => {
    //   console.log(res);
    //   if (res) this.currentData = res;
    // })
  }
}
