"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var address_1 = require('./address');
var forms_1 = require('@angular/forms');
var institution_1 = require("./institution");
var InstitutionComponent = (function () {
    function InstitutionComponent(_fb) {
        this._fb = _fb;
        this.institutionData = new core_1.EventEmitter();
        this.inst = new institution_1.Institution();
        this.defaultAddress = new address_1.Address(' ', ' ', ' ', ' ', ' ', ' ', ' ', 'KY', ' ', false);
        this.inst = this.externalInstitution;
    }
    InstitutionComponent.prototype.ngOnInit = function () {
        this.institution = this._fb.group({
            name: [this.externalInstitution.name || '', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z0-9 ,]{2,}')]],
            department: [this.externalInstitution.department || '', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z ,]{4,}')]],
            address: [this.externalInstitution.address || this.addy]
        });
    };
    InstitutionComponent.prototype.ngOnChanges = function (changes) {
        this.inst = this.externalInstitution;
        this.defaultAddress = this.externalInstitution.address;
        this.updateInstitution();
    };
    InstitutionComponent.prototype.enterAddress = function (addressObject) {
        this.inst.address = addressObject;
    };
    InstitutionComponent.prototype.updateInstitution = function () {
        this.institutionData.emit(this.inst);
    };
    __decorate([
        core_1.Output()
    ], InstitutionComponent.prototype, "institutionData");
    __decorate([
        core_1.Input()
    ], InstitutionComponent.prototype, "addy");
    __decorate([
        core_1.Input()
    ], InstitutionComponent.prototype, "isEmployee");
    __decorate([
        core_1.Input()
    ], InstitutionComponent.prototype, "externalInstitution");
    InstitutionComponent = __decorate([
        core_1.Component({
            selector: 'institution',
            templateUrl: '../app/institution.component.html'
        })
    ], InstitutionComponent);
    return InstitutionComponent;
}());
exports.InstitutionComponent = InstitutionComponent;
//# sourceMappingURL=institution.component.js.map