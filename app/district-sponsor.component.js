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
var district_sponsor_1 = require("./district-sponsor");
var DistrictSponsorComponent = (function () {
    function DistrictSponsorComponent(_fb) {
        this._fb = _fb;
        this.sendDistrictSponsor = new core_1.EventEmitter();
        this.phoneTypes = ["home", "mobile", "office", "fax"];
        this.emailTypes = ["home", "work", "other"];
        this.levels = ['Senior Director', 'Director', 'Associate Director'];
        this.offices = ['Administrative Services', 'Operations', 'Curriculum, Instruction, & Assessment',
            'School Leadership', 'Equity', 'Family & Community', 'Data, Research, & Evaluation'];
        this.distSponsor = new district_sponsor_1.DistrictSponsor();
    }
    DistrictSponsorComponent.prototype.ngOnInit = function () {
        this.districtSponsor = this._fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            jobTitle: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            emailType: ['work', forms_1.Validators.required],
            userName: ['', forms_1.Validators.required],
            domain: ['fayette.kyschools.us', [forms_1.Validators.required, forms_1.Validators.pattern('^.*((\.com)|(\.net)|(\.us)|(\.gov)|(\.edu)|(\.org))$')]],
            phoneType: ['office', forms_1.Validators.required],
            areaCode: ['859', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{3}')]],
            exchangeCode: ['381', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{3}')]],
            subscriberNumber: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[0-9]{4}')]],
            office: ['', forms_1.Validators.required],
            level: ['', forms_1.Validators.required],
            delegated: [false, forms_1.Validators.required]
        });
    };
    DistrictSponsorComponent.prototype.makeUserName = function () {
        return this.distSponsor.firstName.concat('.').concat(this.distSponsor.lastName);
    };
    DistrictSponsorComponent.prototype.updateDistrictSponsor = function () {
        this.sendDistrictSponsor.emit(this.distSponsor);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DistrictSponsorComponent.prototype, "sendDistrictSponsor", void 0);
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