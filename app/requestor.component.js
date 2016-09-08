"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var requestor_1 = require("./requestor");
var RequestorComponent = (function () {
    function RequestorComponent(_fb) {
        this._fb = _fb;
        this.requested = new core_1.EventEmitter();
        this.requestor = new requestor_1.Requestor();
    }
    RequestorComponent.prototype.ngOnInit = function () {
        this.requestedBy = this._fb.group(this.theRequestor);
    };
    RequestorComponent.prototype.updateRequestor = function () {
        this.requested.emit(this.requestor);
    };
    __decorate([
        core_1.Input()
    ], RequestorComponent.prototype, "theRequestor");
    __decorate([
        core_1.Output()
    ], RequestorComponent.prototype, "requested");
    RequestorComponent = __decorate([
        core_1.Component({
            selector: 'requestor',
            templateUrl: 'requestor.component.html'
        })
    ], RequestorComponent);
    return RequestorComponent;
}());
exports.RequestorComponent = RequestorComponent;
//# sourceMappingURL=requestor.component.js.map