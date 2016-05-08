import {Component} from 'angular2/core';
import {Http,HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Component({
  selector: 'parent-app',
  template: `
    <ul *ngIf="games">
      <li *ngFor="#game of games.games">
        {{game.title}}
      </li>
    </ul>
  `
})

export class MainComponent {
  games
  constructor(http: Http) {
    http.get('games.json')
      // Call map on the response observable to get the parsed games object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed games object and attach it to the
      // component
      .subscribe(games => this.games = games);
  }
}