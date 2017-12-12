import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlacesComponent } from './places.component';

@NgModule({
  declarations: [
    PlacesComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXXA5WeqPp88kMAVqOYpLt-c389PofZs8',
      libraries: ['places']
    }),
    FormsModule, ReactiveFormsModule
  ],
  exports: [PlacesComponent],
  providers: []
})
export class PlacesModule { }
