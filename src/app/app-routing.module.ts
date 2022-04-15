import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { OcrComponent } from './components/ocr/ocr.component';
import { TokenizerComponent } from './components/tokenizer/tokenizer.component';



const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"", component: OcrComponent},
  {path:"about", component: AboutComponent}, 
  {path:"frequency", component: CounterComponent}, 
  {path:"tokenizer", component: TokenizerComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
