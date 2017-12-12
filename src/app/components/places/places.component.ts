import { MapsAPILoader } from '@agm/core';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { bindCallback } from 'rxjs/observable/bindCallback';

import {
   debounceTime, distinctUntilChanged, switchMap, map
 } from 'rxjs/operators';

declare var google: any;

@Component({
  selector: 'app-places',
  templateUrl: './places.template.html',
  styleUrls: ['./places.style.scss']
})
export class PlacesComponent implements OnInit {

  public places$: Observable<any>;

  private searchTerms = new Subject<string>();

  @Output() onPlaceSelected: EventEmitter<any> = new EventEmitter<any>();

  private service: any;

  constructor (private mapsApiLoader: MapsAPILoader) {}

  public search(value) {
    this.searchTerms.next(value);
  }

  public placeSelected(place) {
    this.searchTerms.next(place.description);
    this.onPlaceSelected.emit(place);
  }

  ngOnInit() {

    // load Places Autocomplete
    this.mapsApiLoader.load().then(() => {
      this.service = new google.maps.places.AutocompleteService();
    });

    this.places$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        const predictions = (input, callback) => {
          return this.service.getQueryPredictions({ input: input }, (r, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              return callback();
            }
            callback(r);
          });
        };
        return bindCallback(predictions)(term);
      })
    );

  }

}
