import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { Header } from './components';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';
import { APP_STORE } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING,
    Header,
    APP_STORE,
    StoreDevtoolsModule.instrument({maxAge: 5})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
