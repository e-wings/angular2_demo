import {Component} from 'angular2/core';
import {Http,HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Component({
  selector: 'parent-app',
  template: `
    <ul *ngIf="games">
      <li *ngFor="#game of games">
        {{game.title}}
      </li>
    </ul>
  `
})

export class MainComponent {
  public data;
  public games;
  constructor(http: Http) {
    http.get('games.json')
      // Call map on the response observable to get the parsed games object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed games object and attach it to the
      // component
      .subscribe(
        data => this.jsonReady(data),
        err => this.logError(err)
      );
  }
  
  jsonReady(data){
    this.data=data;
    this.games=data.games;
    console.log("json ready");
  }
  
  logError(err){
    console.log(err);
  }
}