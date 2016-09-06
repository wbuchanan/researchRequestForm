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
var institution_1 = require("./institution");
var InstitutionComponent = (function () {
    function InstitutionComponent(_fb) {
        this._fb = _fb;
        this.inst = new institution_1.Institution();
    }
    InstitutionComponent.prototype.ngOnInit = function () {
        this.institution = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z0-9]+')]],
            department: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z]+')]],
            address: this.addy
        });
    };
    InstitutionComponent.prototype.getInstitution = function () {
        return this.inst;
    };
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