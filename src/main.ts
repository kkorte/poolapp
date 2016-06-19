import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyBekyPXhKDHL4oSWSpJXREWdlQOQKwNZPM",
    authDomain: "project-3910462533538160711.firebaseapp.com",
    databaseURL: "https://project-3910462533538160711.firebaseio.com",
    storageBucket: "project-3910462533538160711.appspot.com",
  })
])
.catch(err => console.error(err));
