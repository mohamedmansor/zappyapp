import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  tweets: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/tweet').subscribe(data => {
      this.tweets = data;
    });
  }

}
