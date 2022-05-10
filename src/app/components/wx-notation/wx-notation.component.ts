import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wx-notation',
  templateUrl: './wx-notation.component.html',
  styleUrls: ['./wx-notation.component.scss']
})
export class WxNotationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("WxNotationComponent Loaded")
  }

}
