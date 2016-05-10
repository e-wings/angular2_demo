"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//定义一个组件
var EzVideo = (function () {
    function EzVideo() {
    }
    EzVideo = __decorate([
        core_1.Component({
            selector: "ez-video",
            template: "\n        <h1>I LOVE THIS VIDEO!</h1>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], EzVideo);
    return EzVideo;
}());
//EzMusic组件
var EzMusic = (function () {
    function EzMusic() {
    }
    EzMusic = __decorate([
        core_1.Component({
            selector: "ez-music",
            template: "\n        <h3>\u97F3\u4E50\uFF1A\u5E73\u51E1\u4E4B\u8DEF</h3>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], EzMusic);
    return EzMusic;
}());
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        //console.log(this.router.urlTree.root.toString());
        this.router.navigate(['/crisis-center']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1 class=\"title\">Component111 Router</h1>\n    <nav>\n      <a [routerLink]=\"['/crisis-center']\">Crisis Center</a>\n      <a [routerLink]=\"['/heroes']\">Heroes</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            //providers:  [DialogService, HeroService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/crisis-center', component: EzVideo },
            { path: '/heroes', component: EzMusic },
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 

//# sourceMappingURL=app.component.js.map
