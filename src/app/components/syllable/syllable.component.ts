import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
// import nlp from 'compromise/types/two'
// var plg = require('compromise')
// var compromise = require("compromise")
var nlp = require('compromise/two')
var plg = require('compromise-speech')
nlp.extend(plg)
@Component({
  selector: 'app-syllable',
  templateUrl: './syllable.component.html',
  styleUrls: ['./syllable.component.scss']
})
export class SyllableComponent implements OnInit {
  syllableResults: any;

  constructor(private titleService :Title,
    private metaTags :Meta) { }
  doc:any
  syllableInput:string|undefined
  syllableResult:any
  ngOnInit(): void {
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


    let doc = nlp('Google systems show that you recently verified your site. We have some tips to help you get the most of this free service and maximise your site performance on Google Search.')
    this.syllableResults = doc.compute('syllables').data()
    for (let i = 0; i < this.syllableResults.length; i++) {
      console.log(this.syllableResults[i].terms)
      this.syllableResult += this.syllableResults[i].terms;      
    }
    console.log(this.syllableResult)
  }
  syllabify(){
    this.doc = nlp(this.syllableInput)
    let str = this.doc.compute('syllables')
    console.log(str)
  }
}
