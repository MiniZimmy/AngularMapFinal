import { Component, Input } from '@angular/core';
import { Coordinates, Marker } from './../../models';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.template.html',
  styleUrls: ['./marker.style.scss']
})
export class MarkerComponent {

  @Input() public marker: Marker;

  constructor () {
  }

}
