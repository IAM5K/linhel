import { Component, HostListener, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Linguistic Helper';
  opened=true
  events: string[] = [];
  afterUrl:any
  public innerWidth: any;
  sideNavMode:any='push'
  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService,
    private titleService :Title,
    private metaTags :Meta,
    ){
  }

  ngOnInit():void {
    this.innerWidth = window.innerWidth;
    this.confSidenav();
    this.titleService.setTitle(`Linguistic Helper| One Solution for Linguistic Students and Faculties.`)
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

    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
          const gtmTag = {
              event: 'page',
              pageName: item.url
          };
          this.gtmService.pushTag(gtmTag);
      }
  });
  }


  // Configure sidenav according to screen size
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth)
    this.confSidenav()
  }
  optSelected(){
    if(this.innerWidth<821){
      this.opened=false
    }
    else{
      this.opened=true
    }   
  }
  confSidenav(){    
    if(this.innerWidth<821){
      this.sideNavMode='over'
      this.opened=false
    }
    else{
      this.opened=true
      this.sideNavMode='side'
    }
  }
}
