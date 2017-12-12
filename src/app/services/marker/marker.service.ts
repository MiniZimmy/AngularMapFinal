import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
import { Coordinates, IMarker, Marker } from './../../models';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/startWith';

@Injectable()
export class MarkerService {

  // public markers$ = new Subject<Marker[]>();
  public markers: Marker[] = [];

  constructor() {
    // this.markers$.startWith([]);
  }

  public addMarker(marker: IMarker) {
    this.markers.push(new Marker(marker));
    // this.markers$.next(this.markers);
  }

  public createAndAddMarker(data: { coordinates: Coordinates, title: string, label: string, draggable?: boolean}): void {
    this.addMarker(new Marker({
      coordinates: data.coordinates,
      title: data.title,
      label: data.label,
      draggable: data.draggable
    }));
  }

  // public deleteMarker(c: Coordinates) {
  //   this.markers$.map((markers) => {
  //     const markerIdx = markers.findIndex((el) => el.coordinates.equals(c));
  //     markers.splice(markerIdx, 1);
  //     this.markers$.next(markers);
  //   });
  // }

}
