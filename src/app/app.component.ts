import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app'
import { filter } from 'rxjs';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'linhel';
  afterUrl:any
  constructor(router: Router,gtag: Gtag){
    const navEndEvents = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvents.subscribe((e)=>{
      this.afterUrl = e
      gtag.pageview({
        'page_path': this.afterUrl.url
      })  
    });
  }

}
