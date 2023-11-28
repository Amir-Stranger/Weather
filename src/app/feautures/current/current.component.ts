import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CurrentWeatherModel} from "../../shared/models/current-weather";
import {AstronomyService} from "../../services/astronomy.service";
import {Astronomy} from "../../shared/models/astronomy";

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnChanges {
  @Input() currentData!: CurrentWeatherModel;
  // astronomy!: Astronomy = {
  astronomy: any = {
    location: {
      name: "Tehran",
      region: "Tehran",
      country: "Iran",
      lat: 35.73,
      lon: 51.33,
      tz_id: "Asia/Tehran",
      localtime_epoch: 1701189565,
      localtime: "2023-11-28 20:09"
    },
    astronomy: {
      astro: {
        sunrise: "06:53 AM",
        sunset: "04:52 PM",
        moonrise: "05:28 PM",
        moonset: "07:57 AM",
        moon_phase: "Waning Gibbous",
        moon_illumination: 99,
        is_moon_up: 1,
        is_sun_up: 0
      }
    }
  };

  constructor(private astronomyService: AstronomyService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (this.currentData)
      // this.astronomyService.getAstronomy(this.currentData.location.name).subscribe(res => {
      //   console.log(res);
      //   if (res) this.astronomy = res;
      // })
  }

}
