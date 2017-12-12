import { NgModule } from '@angular/core';

import { MarkerService } from './marker.service';

export * from './marker.service';

@NgModule({
  providers: [
    MarkerService
  ]
})
export class MarkerServiceModule {}
