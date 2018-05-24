import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any[];
  constructor(private http: Http) {
    http.get('http://127.0.0.1:8000/snippets/').subscribe(
      resp => {
        this.posts = resp.json();
      });
  }
}
