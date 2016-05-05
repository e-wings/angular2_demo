System.register(['angular2/core', './component.child'], function(exports_1, context_1) {
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
    var core_1, component_child_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (component_child_1_1) {
                component_child_1 = component_child_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent.prototype.btnClick = function (element) {
                    this.nameStr = element.value;
                };
                MainComponent.prototype.handleChildOutput = function (arg) {
                    console.log('received: ' + arg);
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'parent-app',
                        directives: [component_child_1.ChildComponent],
                        template: "\n    <input #parentName><br/>\n    <button (click)=\"btnClick(parentName);\">\u4F20\u5411\u5B50component</button>\n    <child-app [childName]=\"nameStr\" (childOutput)=\"handleChildOutput($event)\"></child-app>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});

//# sourceMappingURL=component.main.js.map
