import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';

// const fs = require('fs');
@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.scss']
})
export class OcrComponent implements OnInit {

  worker: Tesseract.Worker |any ;
  workerReady= false;
  ocrResult = 'Recognizing...';
  captureProgress=0
  image="assets/img/eng_bw.png"
  imageUrl="assets/img/eng_bw.png"
  constructor() {
    this.loadWorker()
    // this.doOCR();
  }
  async loadWorker(){
    this.worker = createWorker({
      logger: progress => {
        console.log(progress)
        if(progress.status == 'recognizing text'){
          this.captureProgress= parseInt(''+ progress.progress*100)
        }
      }
    });
    await this.worker.load();
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    console.log("OCR Worker Initialized ")
    this.workerReady= true;

  } 
  // async doOCR() {
  //   const worker = createWorker({
  //     logger: m => console.log(m),
  //   });
  //   await worker.load();
  //   await worker.loadLanguage('eng');
  //   await worker.initialize('eng');
  //   const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  //   this.ocrResult = text;
  //   console.log(text);
  //   await worker.terminate();
  // }



  async recogonizeImage(){
    const result = await this.worker.recognize(this.imageUrl) ;
    console.log(result);
    this.ocrResult = result.data.text;
    // const { data } = await this.worker.getPDF('Tesseract OCR Result');
    // fs.writeFileSync('tesseract-ocr-result.pdf', Buffer.from(data));
    // console.log('Generate PDF: tesseract-ocr-result.pdf');
    // await this.worker.terminate();
  }

  ngOnInit(): void {
  }

  onselectFile(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload= (event: any) =>{
        console.log("Image Uploaded")
          this.imageUrl=event.target.result
      }
    }
  }
}
