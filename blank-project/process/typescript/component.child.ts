import { Component,EventEmitter } from 'angular2/core';

@Component({
    selector: 'child-app',
    inputs: ['childName'],
    outputs: ['childOutput'],
    template: `
        <br/><br/>
        <input #ChildName [(ngModel)]=childName><br/>
        <button (click)="fireEvent()">传回父Component</button>
    `
})
export class ChildComponent {
    public childName:string;
    public childOutput = new EventEmitter();
    constructor() { }
    
    fireEvent(){
        console.log("fired");
        this.childOutput.next([this.childName]);
    }
}