import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../environments/environment';
  import * as firebase from 'firebase/app'
import { filter } from 'rxjs';

declare var gtag:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'linhel';
  constructor(router: Router,){
    const navEndEvents = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvents.subscribe((e)=>{
      // gtag('config', 'G-1CPVVWW7WQ',{'page_path':e.urlAfterRedirects});
      console.log("Output of Navigation " + e)
      //   gtag('config', "G-1CPVVWW7WQ" , {'page_path': e.url});
    });
  }
  ngOnInit() {

  }
}
