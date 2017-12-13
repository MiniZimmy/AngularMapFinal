import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { ICoordinates, Coordinates, IMarker, Marker } from './../../models';
import { MarkerService } from './../../services';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.template.html',
  styleUrls: ['./map.style.scss']
})
export class MapComponent implements OnInit {

  public coordinates: ICoordinates;

  public marker: Marker;

  public markerInput: IMarker;

  public markers$: Observable<Marker[]>;

  private detailsService;

  private place: any;

  constructor (private markerService: MarkerService, private mapsApiLoader: MapsAPILoader) {
    this.markers$ = markerService.markers$;
  }

  private getGeolocation (): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.coordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
      }, () => console.log('Could not compute current position'));
    } else {
      console.log('Your browser does not support geolocation');
    }
  }

  private getRandomPlacePhoto(place): string | undefined {
    const photos = place.photos;
    if (!photos || !photos.length) {
      return;
    }
    const nmb = place.photos.length;
    const index = Math.floor(Math.random() * nmb);
    return photos[index].getUrl({maxWidth: 300});
  }

  private addMarkerOnSearch(searchedPlace) {
    this.detailsService.getDetails({
      placeId: searchedPlace.place_id
    }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.coordinates = {
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng()
        };
        this.markerService.addMarker({
          coordinates: this.coordinates,
          title: place.name,
          label: place.formatted_address,
          picture: this.getRandomPlacePhoto(place)
        });
      }
    });
  }

  public setMarkerCoordinates({coords: {lat, lng}}) {
    this.markerInput.coordinates = {
      latitude: lat,
      longitude: lng
    };
  }

  public addMarker() {
    this.markerService.addMarker(new Marker(this.markerInput));
  }

  public loadAPIWrapper(map) {
    this.detailsService = new google.maps.places.PlacesService(map);
  }


  public updateCenter ({lat, lng}) {
    this.coordinates = {
      latitude: lat,
      longitude: lng
    };
  }

  public goToSearch(place) {
    if (!place) {
      return;
    }
    this.addMarkerOnSearch(place);
  }

  ngOnInit() {
    this.coordinates = {
      latitude: 43.604652,
      longitude: 1.444209
    };
    this.marker = new Marker({coordinates: this.coordinates});
    this.markerInput = {
      coordinates: this.coordinates
    };
    this.getGeolocation();
  }

}
