import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';

const appRoutes: Routes = [
  {
    path: 'tweets',
    component: TweetComponent,
    data: {text: 'Tweet List'}
  },
  {
    path: '',
    redirectTo: '/tweets',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
