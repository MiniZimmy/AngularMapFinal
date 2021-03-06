import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: './views/home/home.module#HomeModule'},
  {path: 'map', loadChildren: './views/map/index#MapModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);
