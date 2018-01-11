// the usual barebones bootstrapping, nothing added or changed

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app';
import { TopComponent } from './top';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, TopComponent ],
    bootstrap: [ TopComponent ]
})
export class AppModule {}