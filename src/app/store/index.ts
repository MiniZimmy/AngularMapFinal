import { ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { markerReducer } from './markers/markers.reducer';

const reducers = {
  markers: markerReducer
};

export const APP_STORE: ModuleWithProviders = StoreModule.forRoot(reducers);
