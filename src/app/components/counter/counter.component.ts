import { Component, OnInit } from '@angular/core';
var nlp = require('compromise/two')

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }
  myText:any =""
  characters:number=0
  words:number=0
  sentences:number=0
  punctuations:number=0
  alphabets:number=0

  counter(){
    for (let index = 0; index < this.myText.length; index++) {
      const element = this.myText[index];
      const nelement = this.myText[index+1];
      if(index>=1){
        const pelement = this.myText[index-1];
      }
      
      if(element.match(/[a-zA-z]/)||element===" "){
        console.log(index + " "+ element)
        this.alphabets++
      }

      if(element=== ("."||"?"||"!" ) ){
        this.sentences++
      }
    }
  }

  sentenceCounter(){

  }

  ngOnInit(): void {
    let doc = nlp('and you, you will be queen')
    let str = doc.compute('freq')
    console.log(str)
  }

}
