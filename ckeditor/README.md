# AngularJS2 Blank Project
This is a "blank" project, which has no business logic but fully configured to npm, gulp, typescript... Just like Angular official quick start project, but used gulp.

## Objective
This project is a nice start point of you own project. Just clone and happy coding!

## Setup

git clone https://github.com/e-wings/angular2_demo.git

cd angular2_demo

cd blank-project

npm install

gulp

Note: You need node and gulp installed first.(npm install --global gulp).



# AngularJS2 ckeditor
AngularJS2 ckeditor 在线网页编辑器组件

## 组件目的
增加网站后台内容编辑器的功能，也可以作为前台评论区编辑器用。

## 使用方法

先搭建好angular2框架，具体参考 https://github.com/e-wings/angular2_demo/tree/master/blank-project

第一步：去ckeditor官网下载源代码，文件夹放入根目录（与index.html平级）
第二步：在index.html里调用js文件   <script src="ckeditor/ckeditor.js"></script>

第三步：新建ckeditor.ts文件，放入ts文件夹（记得在主组件里调用 directives: [CKEDITOR]）
import {Component, Input} from 'angular2/core'

@Component({
  selector: 'ckeditor',
  template: `
    <h1>ckeditor</h1>
    <textarea name="editor1" id="editor1" rows="rows" cols="cols" [(ngModel)]="content" ></textarea>
    <br />
    <button type="submit" class="btn" (click)="change()">Submit</button>          //提交时给变量重新赋值
    <br />
    <div [innerHTML]="content"></div>          //编辑html代码，显示对应的css样式
  `
})
export class CKEDITOR {

    @Input() targetId;
    @Input() rows = 10;  //you can also give default values here
    @Input() cols;     

    public content:string='ccc';        //定义变量并初始化

    constructor(){}
    ngOnInit(){
       window['CKEDITOR']['replace']( 'editor1' );
    }


    change(){               //由于编辑器双向绑定的特殊性，需要在组件里重新给变量赋值
      this.content=document.getElementById("cke_1_contents").getElementsByTagName("iframe")[0].contentDocument.getElementsByClassName('cke_editable')[0].innerHTML;
    }
}

第四步：再compnent.main.ts里面引用该组件
import {Component} from 'angular2/core';
import {CKEDITOR} from './ckeditor';

@Component({
  selector: 'my-app',
  directives: [CKEDITOR],
  template: `
    <ckeditor></ckeditor>
  `
})

export class MainComponent {}

