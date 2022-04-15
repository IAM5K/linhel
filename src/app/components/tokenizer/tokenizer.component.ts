import { Component, OnInit } from '@angular/core';

var nlp = require('compromise')

@Component({
  selector: 'app-tokenizer',
  templateUrl: './tokenizer.component.html',
  styleUrls: ['./tokenizer.component.scss']
})
export class TokenizerComponent implements OnInit {

  inputToken:string=""
  dataLenth:number=0
  resultData:any
  constructor() { }
  
  startTokenizer(){
    this.resultData=(nlp(this.inputToken)).data()
    this.dataLenth=this.resultData.length
    // for (let i = 0; i < this.dataLenth; i++) {
    //   this.resultData.append( (nlp(this.inputToken)).data(i).terms)
    // }
    
    console.log(this.resultData)

    console.log(this.dataLenth)
  }
  ngOnInit(): void {
    // let doc = nlp('she sells seashells by the seashore.')
    // console.log(doc.data())
  }

  
}
