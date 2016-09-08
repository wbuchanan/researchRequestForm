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
var address_component_1 = require('./address.component');
var forms_1 = require('@angular/forms');
var institution_1 = require("./institution");
var InstitutionComponent = (function () {
    function InstitutionComponent(_fb) {
        this._fb = _fb;
        this.institutionData = new core_1.EventEmitter();
        this.inst = new institution_1.Institution();
    }
    InstitutionComponent.prototype.ngOnInit = function () {
        this.institution = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z0-9 ,]{2,}')]],
            department: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z ,]{4,}')]],
            address: this.addy
        });
    };
    InstitutionComponent.prototype.enterAddress = function (addressObject) {
        this.inst.address = addressObject;
    };
    InstitutionComponent.prototype.updateInstitution = function () {
        this.institutionData.emit(this.inst);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InstitutionComponent.prototype, "institutionData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', address_component_1.AddressComponent)
    ], InstitutionComponent.prototype, "addy", void 0);
    InstitutionComponent = __decorate([
        core_1.Component({
            selector: 'institution',
            templateUrl: '../app/institution.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], InstitutionComponent);
    return InstitutionComponent;
}());
exports.InstitutionComponent = InstitutionComponent;
//# sourceMappingURL=institution.component.js.map