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
var contact_1 = require('./contact');
var phone_component_1 = require('./phone.component');
var email_component_1 = require('./email.component');
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
        core_1.Input(), 
        __metadata('design:type', email_component_1.EmailComponent)
    ], ContactComponent.prototype, "email", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', phone_component_1.PhoneComponent)
    ], ContactComponent.prototype, "phone", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ContactComponent.prototype, "contactInfo", void 0);
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contactInformation',
            templateUrl: '../app/contact.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map