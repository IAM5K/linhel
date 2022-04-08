import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AnalyticsModule } from '@angular/fire/analytics';
import { GtagModule } from 'angular-gtag';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OcrComponent } from './ocr/ocr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';

// import { initializeApp } from "firebase";
// import { getAnalytics } from "firebase/analytics";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OcrComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AnalyticsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    GtagModule.forRoot({ trackingId: environment.firebaseConfig.measurementId, trackPageviews: true }),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
