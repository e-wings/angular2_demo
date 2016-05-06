System.register(['angular2/core', './user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent() {
                    this.cities = ['BeiJing', 'ShangHai',
                        'NanJing', 'ShenZhen'];
                    this.model = new user_1.User(18, 'Xiao Hui', this.cities[2], '123@123.com');
                    this.submitted = false;
                    this.active = true;
                }
                UserFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                UserFormComponent.prototype.newUser = function () {
                    var _this = this;
                    this.model = new user_1.User(16, '', '');
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                UserFormComponent.prototype.onChange = function (deviceValue) {
                    this.model.city = deviceValue;
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        selector: 'user-form',
                        templateUrl: 'user-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});

//# sourceMappingURL=user-form.component.js.map
