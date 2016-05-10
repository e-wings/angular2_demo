import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
//定义一个组件
@Component({
    selector:"ez-video",
    template : `
        <h1>I LOVE THIS VIDEO!</h1>
    `
})
class EzVideo{}

//EzMusic组件
@Component({
    selector:"ez-music",
    template : `
        <h3>音乐：平凡之路</h3>
    `
})
class EzMusic{}


@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component111 Router</h1>
    <nav>
      <a [routerLink]="['/crisis-center']">Crisis Center</a>
      <a [routerLink]="['/heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  //providers:  [DialogService, HeroService],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/crisis-center',  component: EzVideo},
  {path: '/heroes',  component: EzMusic},
])
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    //console.log(this.router.urlTree.root.toString());
    this.router.navigate(['/crisis-center']);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/