import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from './../../store/state';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Coordinates, IMarker, Marker } from './../../models';


@Injectable()
export class MarkerService {

  public markers$: Observable<Marker[]>;

  constructor(private store: Store<IState>) {
    this.markers$ = store.select((s) => s.markers['markers']);
  }

  public addMarker(marker: IMarker) {
    this.store.dispatch({
      type: 'ADD',
      payload: new Marker(marker)
    });
  }

  public createAndAddMarker(data: { coordinates: Coordinates, title: string, label: string, draggable?: boolean}): void {
    this.addMarker(new Marker({
      coordinates: data.coordinates,
      title: data.title,
      label: data.label,
      draggable: data.draggable
    }));
  }

  public removeMarker(marker: Marker) {
    this.store.dispatch({
      type: 'REMOVE',
      payload: marker
    });
  }

  public removeAllMarkers() {
    this.store.dispatch({
      type: 'CLEAR'
    });
  }

}
