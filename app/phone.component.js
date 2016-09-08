"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var phone_1 = require('./phone');
var forms_1 = require('@angular/forms');
var PhoneComponent = (function () {
    function PhoneComponent(_fb) {
        this._fb = _fb;
        this.phoneAdded = new core_1.EventEmitter();
        this.phoneTypes = ["home", "mobile", "office", "fax"];
        this.phones = new Array(new phone_1.Phone());
    }
    PhoneComponent.prototype.ngOnChange = function () {
    };
    PhoneComponent.prototype.ngOnInit = function () {
        this.phone = this._fb.group({
            phoneNumbers: this._fb.array([this.initPhoneFields()])
        });
    };
    PhoneComponent.prototype.initPhoneFields = function () {
        return this._fb.group({
            phoneType: ['', forms_1.Validators.required],
            countryCode: ['001', forms_1.Validators.required],
            areaCode: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{3}')]],
            exchangeCode: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{3}')]],
            subscriberNumber: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{4}')]],
            extension: ['']
        });
    };
    PhoneComponent.prototype.addPhoneFields = function () {
        this.phones.push(new phone_1.Phone());
        var control = this.phone.controls['phoneNumbers'];
        control.push(this.initPhoneFields());
    };
    PhoneComponent.prototype.removePhoneFields = function (i) {
        this.phones.pop();
        var control = this.phone.controls['phoneNumbers'];
        control.removeAt(i);
    };
    PhoneComponent.prototype.updatePhoneNumbers = function () {
        this.phoneAdded.emit(this.phones);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PhoneComponent.prototype, "phoneType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PhoneComponent.prototype, "countryCode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PhoneComponent.prototype, "areaCode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PhoneComponent.prototype, "exchangeCode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PhoneComponent.prototype, "subscriberNumber", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PhoneComponent.prototype, "extension", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PhoneComponent.prototype, "phoneAdded", void 0);
    PhoneComponent = __decorate([
        core_1.Component({
            selector: 'phone',
            templateUrl: '../app/phone.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], PhoneComponent);
    return PhoneComponent;
}());
exports.PhoneComponent = PhoneComponent;
//# sourceMappingURL=phone.component.js.map