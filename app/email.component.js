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
var email_1 = require('./email');
var forms_1 = require('@angular/forms');
var EmailComponent = (function () {
    function EmailComponent(_fb) {
        this._fb = _fb;
        this.emailAdded = new core_1.EventEmitter();
        this.emailTypes = ["home", "work", "other"];
        this.emails = new Array(new email_1.Email());
    }
    EmailComponent.prototype.ngOnChange = function () {
    };
    EmailComponent.prototype.ngOnInit = function () {
        this.email = this._fb.group({
            emailAddresses: this._fb.array([this.initEmailFields()])
        });
    };
    EmailComponent.prototype.initEmailFields = function () {
        return this._fb.group({
            emailType: ['', forms_1.Validators.required],
            userName: ['', forms_1.Validators.required],
            domain: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^.*((\.com)|(\.net)|(\.us)|(\.gov)|(\.edu)|(\.org))$')]]
        });
    };
    EmailComponent.prototype.addEmailFields = function () {
        this.emails.push(new email_1.Email());
        var control = this.email.controls['emailAddresses'];
        control.push(this.initEmailFields());
    };
    EmailComponent.prototype.removeEmailFields = function (i) {
        this.emails.pop();
        var control = this.email.controls['emailAddresses'];
        control.removeAt(i);
    };
    EmailComponent.prototype.getEmailAddresses = function () {
        return this.emails;
    };
    EmailComponent.prototype.update = function () {
        this.emailAdded.emit(this.getEmailAddresses());
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EmailComponent.prototype, "emailType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EmailComponent.prototype, "userName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EmailComponent.prototype, "domain", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EmailComponent.prototype, "emailAdded", void 0);
    EmailComponent = __decorate([
        core_1.Component({
            selector: 'email',
            templateUrl: '../app/email.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], EmailComponent);
    return EmailComponent;
}());
exports.EmailComponent = EmailComponent;
//# sourceMappingURL=email.component.js.map