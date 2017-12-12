import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MarkerComponent } from './marker.component';

@NgModule({
  declarations: [
    MarkerComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXXA5WeqPp88kMAVqOYpLt-c389PofZs8'
    })
  ],
  exports: [MarkerComponent],
  providers: []
})
export class MarkerModule {}
