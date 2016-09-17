"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var contact_1 = require('./contact');
var forms_1 = require('@angular/forms');
var ContactComponent = (function () {
    function ContactComponent(_fb) {
        this._fb = _fb;
        this.contactInfo = new core_1.EventEmitter();
        this.contacts = new contact_1.Contact();
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactInformation = this._fb.group({
            emailAddresses: [this.email, forms_1.Validators.required],
            phoneNumbers: [this.phone, forms_1.Validators.required]
        });
    };
    ContactComponent.prototype.emailAdded = function (email) {
        this.contacts.emailAddresses = email;
    };
    ContactComponent.prototype.phoneAdded = function (phone) {
        this.contacts.phoneNumbers = phone;
    };
    ContactComponent.prototype.updateContactInfo = function () {
        this.contactInfo.emit(this.contacts);
    };
    __decorate([
        core_1.Input()
    ], ContactComponent.prototype, "email");
    __decorate([
        core_1.Input()
    ], ContactComponent.prototype, "phone");
    __decorate([
        core_1.Output()
    ], ContactComponent.prototype, "contactInfo");
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contactInformation',
            templateUrl: '../app/contact.component.html'
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map