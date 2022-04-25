import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { OcrComponent } from './components/ocr/ocr.component';
import { SyllableComponent } from './components/syllable/syllable.component';
import { TokenizerComponent } from './components/tokenizer/tokenizer.component';
import { WxNotationComponent } from './components/wx-notation/wx-notation.component';



const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch: 'full'},
  {path:"ocr", component: OcrComponent, pathMatch: 'full'},
  {path:"about", component: AboutComponent, pathMatch: 'full'}, 
  {path:"frequency", component: CounterComponent, pathMatch: 'full'}, 
  {path:"tokenizer", component: TokenizerComponent, pathMatch: 'full'}, 
  {path:"syllable", component: SyllableComponent, pathMatch: 'full'}, 
  {path:"wx-notation", component: WxNotationComponent, pathMatch: 'full'}, 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
