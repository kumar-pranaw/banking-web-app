import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'banking-web-app';
  homeComponent = 'I am from app component';

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.getTitle());
  }

  getTitle() {
    return this.title;
  }

}
