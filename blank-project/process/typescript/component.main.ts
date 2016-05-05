import {Component} from 'angular2/core';
import {ChildComponent} from './component.child';

@Component({
  selector: 'parent-app',
  directives: [ChildComponent],
  template: `
    <input #parentName><br/>
    <button (click)="btnClick(parentName);">传向子component</button>
    <child-app [childName]="nameStr" (childOutput)="handleChildOutput($event)"></child-app>
  `
})

export class MainComponent {
  public nameStr:string;
  btnClick(element){
    this.nameStr=element.value;
  }
  
  handleChildOutput(arg){
    console.log('received: '+arg);
  }
}