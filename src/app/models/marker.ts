import { Coordinates, ICoordinates } from './coordinates';

export interface IMarker {
  coordinates: ICoordinates;
  title?: string;
  label?: string;
  draggable?: boolean;
  picture?: string;
}

export class Marker {
  coordinates: Coordinates;
  title: string;
  label: string;
  draggable: boolean;
  picture: string;

  constructor(marker: IMarker = {
    coordinates: new Coordinates({latitude: 0, longitude: 0}),
    draggable: false
  }) {
    this.coordinates = new Coordinates(marker.coordinates);
    this.title = marker.title;
    this.label = marker.label;
    this.draggable = marker.draggable;
    this.picture = marker.picture;
  }

}
