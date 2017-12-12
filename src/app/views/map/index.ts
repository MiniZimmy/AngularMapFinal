import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MapComponent } from './map.component';

import { MarkerModule, PlacesModule } from './../../components';
import { MarkerServiceModule } from './../../services';


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
