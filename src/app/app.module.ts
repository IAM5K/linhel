import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AnalyticsModule } from '@angular/fire/analytics';
import { GtagModule } from 'angular-gtag';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OcrComponent } from './components/ocr/ocr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './components/counter/counter.component';

import { MaterialModule } from './modules/material/material.module';

import { ClipboardModule } from 'ngx-clipboard';
import { TokenizerComponent } from './components/tokenizer/tokenizer.component';
import { SyllableComponent } from './components/syllable/syllable.component';
import { WxNotationComponent } from './components/wx-notation/wx-notation.component';// import { initializeApp } from "firebase";
// import { getAnalytics } from "firebase/analytics";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OcrComponent,
    CounterComponent,
    TokenizerComponent,
    SyllableComponent,
    WxNotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    AngularFireDatabaseModule,
    AnalyticsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    GtagModule.forRoot({ trackingId: environment.firebaseConfig.measurementId, trackPageviews: true }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
