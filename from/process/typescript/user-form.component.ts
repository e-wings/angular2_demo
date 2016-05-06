import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {User}      from './user';
@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent {
  cities = ['BeiJing', 'ShangHai',
            'NanJing', 'ShenZhen'];
  model = new User(18, 'Xiao Hui', this.cities[2], '123@123.com');
  submitted = false;
  onSubmit() { this.submitted = true; }

  active = true;
  newUser() {
    this.model = new User(16, '', '');
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }

  onChange(deviceValue) {
    this.model.city = deviceValue;
  }
}

