"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var person_1 = require('./person');
var forms_1 = require('@angular/forms');
var PersonComponent = (function () {
    function PersonComponent() {
        this.requestor = new core_1.EventEmitter();
        this.componentTitle = this.title;
        this.peep = new person_1.Person();
        this._fb = new forms_1.FormBuilder();
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.person = this._fb.group({
            person: this.peeps,
            isFCPS: [true],
            contactInfo: this.contacts,
            institutionalAffiliation: this.inst
        });
    };
    PersonComponent.prototype.bindPersonObject = function (person) {
        this.peep.person = person;
    };
    PersonComponent.prototype.bindContactInformation = function (contactInfo) {
        this.peep.contactInfo = contactInfo;
    };
    PersonComponent.prototype.bindInstitutionInformation = function (institution) {
        this.peep.institutionalAffiliation = institution;
    };
    PersonComponent.prototype.updateRequestor = function () {
        this.requestor.emit(this.peep);
    };
    __decorate([
        core_1.Input()
    ], PersonComponent.prototype, "peeps");
    __decorate([
        core_1.Input()
    ], PersonComponent.prototype, "contacts");
    __decorate([
        core_1.Input()
    ], PersonComponent.prototype, "inst");
    __decorate([
        core_1.Input()
    ], PersonComponent.prototype, "title");
    __decorate([
        core_1.Output()
    ], PersonComponent.prototype, "requestor");
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'person',
            templateUrl: '../app/person.component.html'
        })
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map