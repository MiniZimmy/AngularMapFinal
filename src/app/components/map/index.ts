import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MapComponent } from './map.component';

import { MarkerModule } from './../marker';
import { MarkerServiceModule } from './../../services';
import { PlacesModule } from './../places';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXXA5WeqPp88kMAVqOYpLt-c389PofZs8',
      libraries: ['places']
    }),
    RouterModule.forChild([
      {path: '', component: MapComponent}
    ]),
    FormsModule,
    MarkerModule, MarkerServiceModule,
    PlacesModule
  ],
  exports: [MapComponent]
})
export class MapModule { }
