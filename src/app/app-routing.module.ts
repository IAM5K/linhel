import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { OcrComponent } from './ocr/ocr.component';



const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"ocr", component: OcrComponent},
  {path:"about", component: AboutComponent}, 
  {path:"", component: CounterComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
