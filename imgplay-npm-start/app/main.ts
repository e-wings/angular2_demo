/// <reference path="../typings/browser/ambient/es6-shim/index.d.ts" />
import { bootstrap }        from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { AppComponent  }     from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS]);