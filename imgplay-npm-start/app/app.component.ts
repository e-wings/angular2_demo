/// <reference path="../typings/jquery.d.ts" />
import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ImagePlay } from './ImagePlay';
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
    <h1 class="title">Component Router</h1>
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
  constructor(private router: Router) {
    this.initPreload();
  }

  ngOnInit() {
    //console.log(this.router.urlTree.root.toString());
    //this.router.navigate(['/crisis-center']);
  }
    
  initPreload = function() {
    var imgs : string[] = [
        'bmw_m2_v1__00000.jpg','bmw_m2_v1__00001.jpg','bmw_m2_v1__00002.jpg','bmw_m2_v1__00003.jpg','bmw_m2_v1__00004.jpg','bmw_m2_v1__00005.jpg','bmw_m2_v1__00006.jpg','bmw_m2_v1__00007.jpg','bmw_m2_v1__00008.jpg','bmw_m2_v1__00009.jpg','bmw_m2_v1__00010.jpg','bmw_m2_v1__00011.jpg','bmw_m2_v1__00012.jpg','bmw_m2_v1__00013.jpg','bmw_m2_v1__00014.jpg','bmw_m2_v1__00015.jpg','bmw_m2_v1__00016.jpg','bmw_m2_v1__00017.jpg','bmw_m2_v1__00018.jpg','bmw_m2_v1__00019.jpg','bmw_m2_v1__00020.jpg','bmw_m2_v1__00021.jpg','bmw_m2_v1__00022.jpg','bmw_m2_v1__00023.jpg','bmw_m2_v1__00024.jpg','bmw_m2_v1__00025.jpg','bmw_m2_v1__00026.jpg','bmw_m2_v1__00027.jpg','bmw_m2_v1__00028.jpg','bmw_m2_v1__00029.jpg','bmw_m2_v1__00030.jpg','bmw_m2_v1__00031.jpg','bmw_m2_v1__00032.jpg','bmw_m2_v1__00033.jpg','bmw_m2_v1__00034.jpg','bmw_m2_v1__00035.jpg','bmw_m2_v1__00036.jpg','bmw_m2_v1__00037.jpg','bmw_m2_v1__00038.jpg','bmw_m2_v1__00039.jpg','bmw_m2_v1__00040.jpg','bmw_m2_v1__00041.jpg','bmw_m2_v1__00042.jpg','bmw_m2_v1__00043.jpg','bmw_m2_v1__00044.jpg','bmw_m2_v1__00045.jpg','bmw_m2_v1__00046.jpg','bmw_m2_v1__00047.jpg','bmw_m2_v1__00048.jpg','bmw_m2_v1__00049.jpg','bmw_m2_v1__00050.jpg','bmw_m2_v1__00051.jpg','bmw_m2_v1__00052.jpg','bmw_m2_v1__00053.jpg','bmw_m2_v1__00054.jpg','bmw_m2_v1__00055.jpg','bmw_m2_v1__00056.jpg','bmw_m2_v1__00057.jpg','bmw_m2_v1__00058.jpg','bmw_m2_v1__00059.jpg','bmw_m2_v1__00060.jpg','bmw_m2_v1__00061.jpg','bmw_m2_v1__00062.jpg','bmw_m2_v1__00063.jpg','bmw_m2_v1__00064.jpg','bmw_m2_v1__00065.jpg','bmw_m2_v1__00066.jpg','bmw_m2_v1__00067.jpg','bmw_m2_v1__00068.jpg','bmw_m2_v1__00069.jpg','bmw_m2_v1__00070.jpg','bmw_m2_v1__00071.jpg','bmw_m2_v1__00072.jpg','bmw_m2_v1__00073.jpg','bmw_m2_v1__00074.jpg','bmw_m2_v1__00075.jpg','bmw_m2_v1__00076.jpg','bmw_m2_v1__00077.jpg','bmw_m2_v1__00078.jpg','bmw_m2_v1__00079.jpg','bmw_m2_v1__00080.jpg','bmw_m2_v1__00081.jpg','bmw_m2_v1__00082.jpg','bmw_m2_v1__00083.jpg','bmw_m2_v1__00084.jpg','bmw_m2_v1__00085.jpg','bmw_m2_v1__00086.jpg','bmw_m2_v1__00087.jpg','bmw_m2_v1__00088.jpg','bmw_m2_v1__00089.jpg','bmw_m2_v1__00090.jpg','bmw_m2_v2__00000.jpg','bmw_m2_v2__00001.jpg','bmw_m2_v2__00002.jpg','bmw_m2_v2__00003.jpg','bmw_m2_v2__00004.jpg','bmw_m2_v2__00005.jpg','bmw_m2_v2__00006.jpg','bmw_m2_v2__00007.jpg','bmw_m2_v2__00008.jpg','bmw_m2_v2__00009.jpg','bmw_m2_v2__00010.jpg','bmw_m2_v2__00011.jpg','bmw_m2_v2__00012.jpg','bmw_m2_v2__00013.jpg','bmw_m2_v2__00014.jpg','bmw_m2_v2__00015.jpg','bmw_m2_v2__00016.jpg','bmw_m2_v2__00017.jpg','bmw_m2_v2__00018.jpg','bmw_m2_v2__00019.jpg','bmw_m2_v2__00020.jpg','bmw_m2_v2__00021.jpg','bmw_m2_v2__00022.jpg','bmw_m2_v2__00024.jpg','bmw_m2_v2__00026.jpg','bmw_m2_v2__00028.jpg','bmw_m2_v2__00030.jpg','bmw_m2_v2__00032.jpg','bmw_m2_v2__00033.jpg','bmw_m2_v2__00035.jpg','bmw_m2_v2__00037.jpg','bmw_m2_v2__00039.jpg','bmw_m2_v2__00041.jpg','bmw_m2_v2__00043.jpg','bmw_m2_v2__00044.jpg','bmw_m2_v2__00046.jpg','bmw_m2_v2__00048.jpg','bmw_m2_v2__00050.jpg','bmw_m2_v2__00052.jpg','bmw_m2_v2__00054.jpg','bmw_m2_v2__00055.jpg','bmw_m2_v2__00056.jpg','bmw_m2_v2__00057.jpg','bmw_m2_v2__00058.jpg','bmw_m2_v2__00059.jpg','bmw_m2_v2__00060.jpg','bmw_m2_v2__00061.jpg','bmw_m2_v2__00062.jpg','bmw_m2_v2__00063.jpg','bmw_m2_v2__00064.jpg','bmw_m2_v2__00065.jpg','bmw_m2_v2__00066.jpg','bmw_m2_v2__00067.jpg','bmw_m2_v2__00068.jpg','bmw_m2_v2__00069.jpg','bmw_m2_v2__00070.jpg','bmw_m2_v2__00071.jpg','bmw_m2_v2__00072.jpg','bmw_m2_v2__00073.jpg','bmw_m2_v2__00074.jpg','bmw_m2_v2__00075.jpg','bmw_m2_v2__00076.jpg','bmw_m2_v2__00077.jpg','bmw_m2_v2__00078.jpg','bmw_m2_v2__00079.jpg','bmw_m2_v2__00080.jpg','bmw_m2_v2__00081.jpg','bmw_m2_v2__00082.jpg','bmw_m2_v2__00083.jpg','bmw_m2_v2__00084.jpg','bmw_m2_v2__00085.jpg','bmw_m2_v2__00086.jpg','bmw_m2_v2__00087.jpg','bmw_m2_v2__00088.jpg','bmw_m2_v2__00089.jpg','bmw_m2_v2__00090.jpg','bmw_m2_v2__00091.jpg','bmw_m2_v2__00092.jpg','bmw_m2_v2__00093.jpg','bmw_m2_v2__00094.jpg','bmw_m2_v2__00095.jpg','bmw_m2_v2__00096.jpg','bmw_m2_v2__00097.jpg','bmw_m2_v2__00098.jpg','bmw_m2_v2__00099.jpg','bmw_m2_v2__00100.jpg','bmw_m2_v3__00000.jpg','bmw_m2_v3__00001.jpg','bmw_m2_v3__00002.jpg','bmw_m2_v3__00003.jpg','bmw_m2_v3__00004.jpg','bmw_m2_v3__00005.jpg','bmw_m2_v3__00006.jpg','bmw_m2_v3__00007.jpg','bmw_m2_v3__00008.jpg','bmw_m2_v3__00009.jpg','bmw_m2_v3__00010.jpg','bmw_m2_v3__00011.jpg','bmw_m2_v3__00012.jpg','bmw_m2_v3__00013.jpg','bmw_m2_v3__00014.jpg','bmw_m2_v3__00015.jpg','bmw_m2_v3__00016.jpg','bmw_m2_v3__00017.jpg','bmw_m2_v3__00018.jpg','bmw_m2_v3__00019.jpg','bmw_m2_v3__00020.jpg','bmw_m2_v3__00021.jpg','bmw_m2_v3__00022.jpg','bmw_m2_v3__00023.jpg','bmw_m2_v3__00024.jpg','bmw_m2_v3__00025.jpg','bmw_m2_v3__00026.jpg','bmw_m2_v3__00027.jpg','bmw_m2_v3__00028.jpg','bmw_m2_v3__00029.jpg','bmw_m2_v3__00030.jpg','bmw_m2_v3__00031.jpg','bmw_m2_v3__00032.jpg','bmw_m2_v3__00033.jpg','bmw_m2_v3__00034.jpg','bmw_m2_v3__00035.jpg','bmw_m2_v3__00036.jpg','bmw_m2_v3__00037.jpg','bmw_m2_v3__00038.jpg','bmw_m2_v3__00039.jpg','bmw_m2_v3__00040.jpg','bmw_m2_v3__00041.jpg','bmw_m2_v3__00042.jpg','bmw_m2_v3__00043.jpg','bmw_m2_v3__00044.jpg','bmw_m2_v3__00045.jpg','bmw_m2_v3__00046.jpg','bmw_m2_v3__00047.jpg','bmw_m2_v3__00048.jpg','bmw_m2_v3__00049.jpg','bmw_m2_v3__00050.jpg','bmw_m2_v3__00051.jpg','bmw_m2_v3__00052.jpg','bmw_m2_v3__00053.jpg','bmw_m2_v3__00054.jpg','bmw_m2_v3__00055.jpg','bmw_m2_v3__00056.jpg','bmw_m2_v3__00057.jpg','bmw_m2_v3__00058.jpg','bmw_m2_v3__00059.jpg','bmw_m2_v3__00060.jpg','bmw_m2_v3__00061.jpg','bmw_m2_v3__00062.jpg','bmw_m2_v3__00063.jpg','bmw_m2_v3__00064.jpg','bmw_m2_v3__00065.jpg','bmw_m2_v3__00066.jpg','bmw_m2_v3__00067.jpg','bmw_m2_v3__00068.jpg','bmw_m2_v3__00069.jpg','bmw_m2_v3__00070.jpg','bmw_m2_v3__00071.jpg','bmw_m2_v3__00072.jpg','bmw_m2_v3__00073.jpg','bmw_m2_v3__00074.jpg','bmw_m2_v3__00075.jpg','bmw_m2_v3__00076.jpg','bmw_m2_v3__00077.jpg','bmw_m2_v3__00078.jpg','bmw_m2_v3__00079.jpg','bmw_m2_v3__00080.jpg','bmw_m2_v3__00081.jpg','bmw_m2_v3__00082.jpg','bmw_m2_v3__00083.jpg','bmw_m2_v3__00084.jpg','text_2_3.png','text_2_2.png','text_2_1.png','text_1_3.png','text_1_2.png','text_1_1.png','screen.jpg','img_2_3.png','img_2_2.png','img_2_1.png','img_1_3.png','img_1_2.png','img_1_1.png','bg_5.jpg','bg_4.jpg','bg_4_shan.jpg','bg_3.jpg','bg_3_shan.jpg','bg_2.jpg','bg_1.jpg','bg_1_shan.jpg'
    ];
    var list_split = [[0,262],[0,43],[43,70],[91,22],[113,64],[177,22],[199,63]];     //预加载段落
    var img_folder : string = "./preload/";           //图片路径
    var preloadLen : number = imgs.length;            //图片张数
    //调用预加载
    $(".start").html("0%");
    $.when(this.preloadImg(imgs, img_folder, preloadLen)).done(
        function() {
          setTimeout(function(){
            //预加载结束
            $("body").trigger("loaded");
            //预加载完成＝loading完成
            $(".start").html("100%");
            //动画开始
            var playList = imgs.slice(list_split[6][0], list_split[6][0] + list_split[6][1]);
            var page1 = new ImagePlay(playList, img_folder, 'myCanvas', 20, false,false,true);
          },1000);
          //图片放入div容器
          var content : string = "";
          for(var i = 0; i < preloadLen; i++) {
            content += " <img src='" + img_folder + imgs[i] + "'>";
          }
          $(".image_holder").html(content);
        }
    );
  }
  
  preloadImg = function(list : string[], img_folder : string, preloadLen : number) {
    //把所有图片数组拼到一起，统一预加载
    var def : any = $.Deferred();
    var len : number = list.length;
    $(list).each(function(i : any, e : any) {
        var img = new Image();
        img.src = img_folder+e;
        if(img.complete) {
            len--;
            $(".start").html(Math.round((preloadLen-len)/preloadLen*100) + "%");
            if(len == 0) {
                def.resolve();
            }
        }
        else {
            img.onload = (function(j : any) {
                return function() {
                    len--;
                    $(".start").html(Math.round((preloadLen-len)/preloadLen*100) + "%");
                    if(len == 0) {
                        def.resolve();
                    }
                };
            })(i);
            img.onerror = function() {
                len--;
                $(".start").html(Math.round((preloadLen-len)/preloadLen*100) + "%");
            };
        }
    });
    return def.promise();
  }
  
  palyimg = function(imgs : string[], list_split : any, img_folder : string) {
      var playList = imgs.slice(list_split[6][0], list_split[6][0] + list_split[6][1]);
      var page1 = new ImagePlay(playList, img_folder, 'myCanvas', 20, false,false,true);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/