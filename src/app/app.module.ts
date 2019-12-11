import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BiographyComponent } from './biography/biography.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(
      [{path: '', redirectTo: 'biography', pathMatch: 'full' },
      {path: 'biography', component: BiographyComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'topnav', component: TopnavComponent},
      {path: 'clock', component: ClockComponent}
      ])],

  declarations: [ AppComponent, BiographyComponent, ResumeComponent, ContactComponent, TopnavComponent, ClockComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
