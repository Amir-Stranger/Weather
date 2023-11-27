import {Component, Input} from '@angular/core';
import {CurrentWeatherModel} from "../../shared/models/current-weather";

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {
  @Input() currentData!: CurrentWeatherModel;

}
