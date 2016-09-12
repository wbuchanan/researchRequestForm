"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    EmailComponent.prototype.updateEmailAddresses = function () {
        this.emailAdded.emit(this.emails);
    };
    __decorate([
        core_1.Output()
    ], EmailComponent.prototype, "emailAdded");
    EmailComponent = __decorate([
        core_1.Component({
            selector: 'email',
            templateUrl: '../app/email.component.html'
        })
    ], EmailComponent);
    return EmailComponent;
}());
exports.EmailComponent = EmailComponent;
//# sourceMappingURL=email.component.js.map