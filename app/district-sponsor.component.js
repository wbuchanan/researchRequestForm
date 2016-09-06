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
var forms_1 = require('@angular/forms');
var people_component_1 = require("./people.component");
var contact_component_1 = require("./contact.component");
var DistrictSponsorComponent = (function () {
    function DistrictSponsorComponent(_fb) {
        this._fb = _fb;
    }
    DistrictSponsorComponent.prototype.ngOnInit = function () {
        this.districtSponsor = this._fb.group({
            person: this.peeps,
            contactInformation: this.contactInformation,
            office: ['', forms_1.Validators.required],
            level: ['', forms_1.Validators.required],
            delegated: [false, forms_1.Validators.required]
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', people_component_1.PeopleComponent)
    ], DistrictSponsorComponent.prototype, "peeps", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', contact_component_1.ContactComponent)
    ], DistrictSponsorComponent.prototype, "contactInformation", void 0);
    DistrictSponsorComponent = __decorate([
        core_1.Component({
            selector: 'district-sponsor',
            templateUrl: '../app/district-sponsor.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], DistrictSponsorComponent);
    return DistrictSponsorComponent;
}());
exports.DistrictSponsorComponent = DistrictSponsorComponent;
//# sourceMappingURL=district-sponsor.component.js.map