import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { createWorker } from 'tesseract.js';
import { OcrLanguages } from "../../interfaces/ocr-languages";
// const fs = require('fs');
import { ClipboardService } from 'ngx-clipboard';
// var Buffer = require('buffer/').Buffer
@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.scss']
})
export class OcrComponent implements OnInit {

  worker: Tesseract.Worker |any ;
  workerReady= false;
  ocrResult = "Recognizing...";
  captureProgress=0
  initProgress=0
  imageUrl=""
  language:any=""
  langCode=""
  ocrLang:OcrLanguages[]=[
    {langCode:"afr", langName:"Afrikaans",   trainedDataUrl:"afr.traineddata "},
    {langCode:"amh", langName:"Amharic",   trainedDataUrl:"amh.traineddata "},
    {langCode:"ara", langName:"Arabic",   trainedDataUrl:"ara.traineddata "},
    {langCode:"asm", langName:"Assamese",   trainedDataUrl:"asm.traineddata "},
    {langCode:"aze", langName:"Azerbaijani",   trainedDataUrl:"aze.traineddata "},
    {langCode:"aze_cyrl", langName:"Azerbaijani- Cyrillic	",   trainedDataUrl:"aze_cyrl.traineddata "},
    {langCode:"bel", langName:"Belarusian",   trainedDataUrl:"bel.traineddata "},
    {langCode:"ben", langName:"Bengali",   trainedDataUrl:"ben.traineddata "},
    {langCode:"bod", langName:"Tibetan",   trainedDataUrl:"bod.traineddata "},
    {langCode:"bos", langName:"Bosnian",   trainedDataUrl:"bos.traineddata "},
    {langCode:"bul", langName:"Bulgarian",   trainedDataUrl:"bul.traineddata "},
    {langCode:"cat", langName:"Catalan Valencian",   trainedDataUrl:"	cat.traineddata "},
    {langCode:"ceb", langName:"Cebuano",   trainedDataUrl:"ceb.traineddata "},
    {langCode:"ces", langName:"Czech",   trainedDataUrl:"ces.traineddata "},
    {langCode:"chi_sim", langName:"Chinese,- Simplified", trainedDataUrl:"chi_sim.traineddata "},
    {langCode:"chi_tra", langName:"Chinese,- Traditional", trainedDataUrl:"	chi_tra.traineddata "},
    {langCode:"chr", langName:"Cherokee",   trainedDataUrl:"chr.traineddata "},
    {langCode:"cym", langName:"Welsh",   trainedDataUrl:"cym.traineddata "},
    {langCode:"dan", langName:"Danish",   trainedDataUrl:"dan.traineddata "},
    {langCode:"deu", langName:"German",   trainedDataUrl:"deu.traineddata "},
    {langCode:"dzo", langName:"Dzongkha",   trainedDataUrl:"dzo.traineddata "},
    {langCode:"ell", langName:"Greek Modern (1453-)",   trainedDataUrl:"	ell.traineddata "},
    {langCode:"eng", langName:"English",   trainedDataUrl:"eng.traineddata "},
    {langCode:"enm", langName:"English Middle (1100-1500)	",   trainedDataUrl:" enm.traineddata "},
    {langCode:"epo", langName:"Esperanto",   trainedDataUrl:"epo.traineddata "},
    {langCode:"est", langName:"Estonian",   trainedDataUrl:"est.traineddata "},
    {langCode:"eus", langName:"Basque",   trainedDataUrl:"eus.traineddata "},
    {langCode:"fas", langName:"Persian",   trainedDataUrl:"fas.traineddata "},
    {langCode:"fin", langName:"Finnish",   trainedDataUrl:"fin.traineddata "},
    {langCode:"fra", langName:"French",   trainedDataUrl:"fra.traineddata "},
    {langCode:"frk", langName:"Fraktur	German",   trainedDataUrl:"frk.traineddata "},
    {langCode:"frm", langName:"French Middle (ca. 1400-1600)	",   trainedDataUrl:"frm.traineddata "},
    {langCode:"gle", langName:"Irish",   trainedDataUrl:"gle.traineddata "},
    {langCode:"glg", langName:"Galician",   trainedDataUrl:"glg.traineddata "},
    {langCode:"grc", langName:"Greek Ancient (-1453)	",   trainedDataUrl:"grc.traineddata "},
    {langCode:"guj", langName:"Gujarati",   trainedDataUrl:"guj.traineddata "},
    {langCode:"hat", langName:"Haitian Haitian Creole	",   trainedDataUrl:"hat.traineddata "},
    {langCode:"heb", langName:"Hebrew",   trainedDataUrl:"heb.traineddata "},
    {langCode:"hin", langName:"Hindi",   trainedDataUrl:"hin.traineddata "},
    {langCode:"hrv", langName:"Croatian",   trainedDataUrl:"hrv.traineddata "},
    {langCode:"hun", langName:"Hungarian",   trainedDataUrl:"hun.traineddata "},
    {langCode:"iku", langName:"Inuktitut",   trainedDataUrl:"iku.traineddata "},
    {langCode:"ind", langName:"Indonesian",   trainedDataUrl:"ind.traineddata "},
    {langCode:"isl", langName:"Icelandic",   trainedDataUrl:"isl.traineddata "},
    {langCode:"ita", langName:"Italian",   trainedDataUrl:"ita.traineddata "},
    {langCode:"ita_old", langName:"Italian - Old	",   trainedDataUrl:"ita_old.traineddata "},
    {langCode:"jav", langName:"Javanese",   trainedDataUrl:"jav.traineddata "},
    {langCode:"jpn", langName:"Japanese",   trainedDataUrl:"jpn.traineddata "},
    {langCode:"kan", langName:"Kannada",   trainedDataUrl:"kan.traineddata "},
    {langCode:"kat", langName:"Georgian",   trainedDataUrl:"kat.traineddata "},
    {langCode:"kat_old", langName:"Georgian- Old	",   trainedDataUrl:"kat_old.traineddata "},
    {langCode:"kaz", langName:"Kazakh",   trainedDataUrl:"kaz.traineddata "},
    {langCode:"khm", langName:"Central Khmer	",   trainedDataUrl:"khm.traineddata "},
    {langCode:"kir", langName:"Kirghiz Kyrgyz	",   trainedDataUrl:"kir.traineddata "},
    {langCode:"kor", langName:"Korean",   trainedDataUrl:"kor.traineddata "},
    {langCode:"kur", langName:"Kurdish",   trainedDataUrl:"kur.traineddata "},
    {langCode:"lao", langName:"Lao",   trainedDataUrl:"lao.traineddata "},
    {langCode:"lat", langName:"Latin",   trainedDataUrl:"lat.traineddata "},
    {langCode:"lav", langName:"Latvian",   trainedDataUrl:"lav.traineddata "},
    {langCode:"lit", langName:"Lithuanian",   trainedDataUrl:"lit.traineddata "},
    {langCode:"mal", langName:"Malayalam",   trainedDataUrl:"mal.traineddata "},
    {langCode:"mar", langName:"Marathi",   trainedDataUrl:"mar.traineddata "},
    {langCode:"mkd", langName:"Macedonian",   trainedDataUrl:"mkd.traineddata "},
    {langCode:"mlt", langName:"Maltese",   trainedDataUrl:"mlt.traineddata "},
    {langCode:"msa", langName:"Malay",   trainedDataUrl:"msa.traineddata "},
    {langCode:"mya", langName:"Burmese",   trainedDataUrl:"mya.traineddata "},
    {langCode:"nep", langName:"Nepali",   trainedDataUrl:"nep.traineddata "},
    {langCode:"nld", langName:"Dutch",   trainedDataUrl:" Flemish	nld.traineddata "},
    {langCode:"nor", langName:"Norwegian",   trainedDataUrl:"nor.traineddata "},
    {langCode:"ori", langName:"Oriya",   trainedDataUrl:"ori.traineddata "},
    {langCode:"pan", langName:"Panjabi",   trainedDataUrl:" Punjabi	pan.traineddata "},
    {langCode:"pol", langName:"Polish",   trainedDataUrl:"pol.traineddata "},
    {langCode:"por", langName:"Portuguese",   trainedDataUrl:"por.traineddata "},
    {langCode:"pus", langName:"Pushto",   trainedDataUrl:" Pashto	pus.traineddata "},
    {langCode:"ron", langName:"Romanian",   trainedDataUrl:" Moldavian; Moldovan	ron.traineddata "},
    {langCode:"rus", langName:"Russian",   trainedDataUrl:"rus.traineddata "},
    {langCode:"san", langName:"Sanskrit",   trainedDataUrl:"san.traineddata "},
    {langCode:"sin", langName:"Sinhala Sinhalese	",   trainedDataUrl:"sin.traineddata "},
    {langCode:"slk", langName:"Slovak",   trainedDataUrl:"slk.traineddata "},
    {langCode:"slv", langName:"Slovenian",   trainedDataUrl:"slv.traineddata "},
    {langCode:"spa", langName:"Spanish Castilian	",   trainedDataUrl:"spa.traineddata "},
    {langCode:"spa_old", langName:"Spanish Castilian - Old	",   trainedDataUrl:"spa_old.traineddata "},
    {langCode:"sqi", langName:"Albanian",   trainedDataUrl:"sqi.traineddata "},
    {langCode:"srp", langName:"Serbian",   trainedDataUrl:"srp.traineddata "},
    {langCode:"srp_latn", langName:"Serbian- Latin	",   trainedDataUrl:"srp_latn.traineddata "},
    {langCode:"swa", langName:"Swahili",   trainedDataUrl:"swa.traineddata "},
    {langCode:"swe", langName:"Swedish",   trainedDataUrl:"swe.traineddata "},
    {langCode:"syr", langName:"Syriac",   trainedDataUrl:"syr.traineddata "},
    {langCode:"tam", langName:"Tamil",   trainedDataUrl:"tam.traineddata "},
    {langCode:"tel", langName:"Telugu",   trainedDataUrl:"tel.traineddata "},
    {langCode:"tgk", langName:"Tajik",   trainedDataUrl:"tgk.traineddata "},
    {langCode:"tgl", langName:"Tagalog",   trainedDataUrl:"tgl.traineddata "},
    {langCode:"tha", langName:"Thai",   trainedDataUrl:"tha.traineddata "},
    {langCode:"tir", langName:"Tigrinya",   trainedDataUrl:"tir.traineddata "},
    {langCode:"tur", langName:"Turkish",   trainedDataUrl:"tur.traineddata "},
    {langCode:"uig", langName:"Uighur Uyghur	",   trainedDataUrl:"uig.traineddata "},
    {langCode:"ukr", langName:"Ukrainian",   trainedDataUrl:"ukr.traineddata "},
    {langCode:"urd", langName:"Urdu",   trainedDataUrl:"urd.traineddata "},
    {langCode:"uzb", langName:"Uzbek",   trainedDataUrl:"uzb.traineddata "},
    {langCode:"uzb_cyrl", langName:"Uzbek- Cyrillic	",   trainedDataUrl:"uzb_cyrl.traineddata "},
    {langCode:"vie", langName:"Vietnamese",   trainedDataUrl:"vie.traineddata "},
    {langCode:"yid", langName:"Yiddish",   trainedDataUrl:"yid.traineddata"}
  ]
  steps=[
    "Step 1: Upload image of which OCR has to be done",
    "Step 2: Confirm the image in Image Preview section",
    "Step 3: Select Language from language dropdown.",
    "Step 4: On succesful selection, buttons will be enabled.",
    "Step 5: Submit and check the progress bar for the result processing progress."
  ]
  constructor(private clipboardApi: ClipboardService,private titleService :Title,
    private metaTags :Meta) {
    // this.loadWorker()
    // this.doOCR();
  }
  async loadWorker(){
    this.worker = createWorker({
      logger: progress => {
        // console.log(progress)
        if(progress.status == 'recognizing text'){
          this.captureProgress= parseInt(''+ progress.progress*100)
        }
      }
    });
    await this.worker.load();
    await this.worker.loadLanguage(this.langCode);
    await this.worker.initialize(this.langCode);
    const languageElement = this.ocrLang.find(element => element.langCode === this.langCode )
    this.language = languageElement?.langName 
    // console.log("OCR Worker Initialized for " +this.langCode)
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
    if(result.progress==undefined && this.captureProgress==100){
      this.captureProgress = 100;
    }
    else{
      this.captureProgress = result.progress*100;
    }
    // console.log(result);
    this.ocrResult = result.data.text;
    // const { data } = await this.worker.getPDF('Tesseract OCR Result');
    // fs.writeFileSync('tesseract-ocr-result.pdf', Buffer.from(data));
    // console.log('Generate PDF: tesseract-ocr-result.pdf');
    // await this.worker.terminate();
  }
  copyText() {
    this.clipboardApi.copyFromContent(this.ocrResult)
  }
  ngOnInit(): void {
    console.log("OCR Loaded")
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
  }

  onselectFile(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload= (event: any) =>{
        this.imageUrl=event.target.result
        // console.log("Image Uploaded" + this.imageUrl)

      }
    }
  }
  resetOcr(){
    this.ocrResult=""
    this.captureProgress = 0
  }

}
