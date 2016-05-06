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