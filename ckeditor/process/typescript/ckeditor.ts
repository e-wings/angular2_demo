import {Component, Input} from 'angular2/core'

@Component({
  selector: 'ckeditor',
  template: `
    <h1>ckeditor</h1>
    <textarea name="editor1" id="editor1" rows="rows" cols="cols" [(ngModel)]="content" ></textarea>
    <br />
    <button type="submit" class="btn" (click)="change()">Submit</button>
    <br />
    <div [innerHTML]="content"></div>
  `
})
export class CKEDITOR {

    @Input() targetId;
    @Input() rows = 10;  //you can also give default values here
    @Input() cols;     

    public content:string='ccc';

    constructor(){}
    ngOnInit(){
       window['CKEDITOR']['replace']( 'editor1' );
    }

     
    change(){               //由于编辑器双向绑定的特殊性，需要在组件里重新给变量赋值
      this.content=document.getElementById("cke_1_contents").getElementsByTagName("iframe")[0].contentDocument.getElementsByClassName('cke_editable')[0].innerHTML;
    }
}
