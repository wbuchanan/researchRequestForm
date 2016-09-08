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
var people_component_1 = require('./people.component');
var contact_component_1 = require('./contact.component');
var institution_component_1 = require('./institution.component');
var forms_1 = require('@angular/forms');
var PersonComponent = (function () {
    function PersonComponent(_fb) {
        this._fb = _fb;
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.person = this._fb.group({
            person: this.peeps,
            isFCPS: [true],
            contactInfo: this.contacts,
            jobLocation: this.inst
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', people_component_1.PeopleComponent)
    ], PersonComponent.prototype, "peeps", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', contact_component_1.ContactComponent)
    ], PersonComponent.prototype, "contacts", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', institution_component_1.InstitutionComponent)
    ], PersonComponent.prototype, "inst", void 0);
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'person',
            templateUrl: '../app/person.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map