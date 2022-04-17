import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as firebase from 'firebase/app'
import { filter } from 'rxjs';
import { Gtag } from 'angular-gtag';

import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'linhel';
  opened=true
  events: string[] = [];
  afterUrl:any
  public innerWidth: any;
  constructor(
    router: Router,
    gtag: Gtag,
    private titleService :Title,
    private metaTags :Meta){
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
  ngOnInit():void {
    this.innerWidth = window.innerWidth;
    this.confSidenav()
    this.titleService.setTitle(`Linguistic Helper|Home `)
    this.metaTags.addTags([
      {
        name:'description',
        content:"Linguistic Helper is a platform to help students, faculties and Researchers to perform their work with help of Computational Linguistic and the mordern tech making it an easy and efficient way of learning Linguistics"
      },
      {
        name:'keyword',
        content:'Falculty of Arts Bhu, BHU, Linguistic, Linguistic helper, Linguistics, linguistics homwork, homework assistant, research assistant, banaras hindu university, image to text, wx notation, tagging, syllable, tokenizer'
      },
      {
        name:'author',
        content:'Sandeep Kumar'
      }
    ])
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
    this.confSidenav()
  }
  confSidenav(){
    if(this.innerWidth<768){
      this.opened=false
    }
    else{
      this.opened=true
    }
  }
}
