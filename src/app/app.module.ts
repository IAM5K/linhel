import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AnalyticsModule } from '@angular/fire/analytics';

import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OcrComponent } from './ocr/ocr.component';

// import { initializeApp } from "firebase";
// import { getAnalytics } from "firebase/analytics";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OcrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AnalyticsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
