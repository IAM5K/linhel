import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

var nlp = require('compromise/two')

@Component({
  selector: 'app-tokenizer',
  templateUrl: './tokenizer.component.html',
  styleUrls: ['./tokenizer.component.scss']
})
export class TokenizerComponent implements OnInit {

  inputToken:string=""
  dataLenth:number=0
  resultData:any
  constructor(private titleService :Title,
    private metaTags :Meta) { }
  
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
    console.log("TokenizerComponent Loaded")
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


    // let doc = nlp('she sells seashells by the seashore.')
    // console.log(doc.data())
  }

  
}
