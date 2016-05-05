System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ChildComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChildComponent = (function () {
                function ChildComponent() {
                    this.childOutput = new core_1.EventEmitter();
                }
                ChildComponent.prototype.fireEvent = function () {
                    console.log("fired");
                    this.childOutput.next([this.childName]);
                };
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'child-app',
                        inputs: ['childName'],
                        outputs: ['childOutput'],
                        template: "\n        <br/><br/>\n        <input #ChildName [(ngModel)]=childName><br/>\n        <button (click)=\"fireEvent()\">\u4F20\u56DE\u7236Component</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            }());
            exports_1("ChildComponent", ChildComponent);
        }
    }
});

//# sourceMappingURL=component.child.js.map
