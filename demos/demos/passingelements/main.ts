import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent  } from './app';
import {Child} from './child'

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, Child ],
    bootstrap:    [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);