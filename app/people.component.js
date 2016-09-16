"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var people_1 = require('../app/people');
var forms_1 = require('@angular/forms');
var PeopleComponent = (function () {
    function PeopleComponent(_fb) {
        this._fb = _fb;
        this.peeps = new core_1.EventEmitter();
        this.person = new people_1.People();
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.people = this._fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            jobTitle: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]]
        });
    };
    PeopleComponent.prototype.updatePeople = function () {
        this.peeps.emit(this.person);
    };
    __decorate([
        core_1.Output()
    ], PeopleComponent.prototype, "peeps");
    PeopleComponent = __decorate([
        core_1.Component({
            selector: 'people',
            templateUrl: '../app/people.component.html'
        })
    ], PeopleComponent);
    return PeopleComponent;
}());
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map