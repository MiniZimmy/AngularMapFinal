import { Component, Input } from '@angular/core';
import { Coordinates, Marker } from './../../models';
import { MarkerService } from './../../services';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.template.html',
  styleUrls: ['./marker.style.scss']
})
export class MarkerComponent {

  @Input() public marker: Marker;

  constructor (private markerService: MarkerService) {
  }

  public remove() {
    this.markerService.removeMarker(this.marker);
  }

}
