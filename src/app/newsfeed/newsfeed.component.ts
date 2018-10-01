import { Component, OnInit } from '@angular/core';
import { News } from '../news';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  news: News = {
    source: "cnn.com",
    title: "Patriots win",
    summary: "Patriots win their second game of the season in an emphatic win over the unebeaten Miami Dolphins",
    link: "cnn.com/sports",
  }
  constructor() { }

  ngOnInit() {
  }

}
