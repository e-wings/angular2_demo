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
    var CKEDITOR;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CKEDITOR = (function () {
                function CKEDITOR() {
                    this.rows = 10; //you can also give default values here
                    this.content = 'ccc';
                }
                CKEDITOR.prototype.ngOnInit = function () {
                    window['CKEDITOR']['replace']('editor1');
                };
                CKEDITOR.prototype.change = function () {
                    this.content = document.getElementById("cke_1_contents").getElementsByTagName("iframe")[0].contentDocument.getElementsByClassName('cke_editable')[0].innerHTML;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CKEDITOR.prototype, "targetId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CKEDITOR.prototype, "rows", void 0);
                __decorate([
                    //you can also give default values here
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CKEDITOR.prototype, "cols", void 0);
                CKEDITOR = __decorate([
                    core_1.Component({
                        selector: 'ckeditor',
                        template: "\n    <h1>ckeditor</h1>\n    <textarea name=\"editor1\" id=\"editor1\" rows=\"rows\" cols=\"cols\" [(ngModel)]=\"content\" ></textarea>\n    <br />\n    <button type=\"submit\" class=\"btn\" (click)=\"change()\">Submit</button>\n    <br />\n    <div [innerHTML]=\"content\"></div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CKEDITOR);
                return CKEDITOR;
            }());
            exports_1("CKEDITOR", CKEDITOR);
        }
    }
});

//# sourceMappingURL=ckeditor.js.map
