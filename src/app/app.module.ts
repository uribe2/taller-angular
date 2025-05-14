import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SeriesListComponent } from "./series/series-list/series-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SeriesListComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
