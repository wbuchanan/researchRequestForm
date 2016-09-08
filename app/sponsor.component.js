"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var sponsor_1 = require("./sponsor");
var SponsorComponent = (function () {
    function SponsorComponent(_fb) {
        this._fb = _fb;
        this.financialSponsor = new core_1.EventEmitter();
        this.sponsorship = new sponsor_1.Sponsor();
        this.durUnits = ["days", "weeks", "months", "years"];
    }
    SponsorComponent.prototype.ngOnInit = function () {
        this.sponsor = this._fb.group({
            poc: this.peeps,
            contactInfo: this.contacts,
            institutionalAffiliation: this.inst,
            fundingAmount: [, forms_1.Validators.required],
            fundingDuration: [, forms_1.Validators.required],
            fundingDurationUnits: ['', forms_1.Validators.required],
            projectStaffSize: []
        });
    };
    SponsorComponent.prototype.bindPersonObject = function (person) {
        this.sponsorship.poc = person;
    };
    SponsorComponent.prototype.bindContactInformation = function (contactInfo) {
        this.sponsorship.contactInfo = contactInfo;
    };
    SponsorComponent.prototype.bindInstitutionInformation = function (institution) {
        this.sponsorship.institutionalAffiliation = institution;
    };
    SponsorComponent.prototype.updateFinancialSponsor = function () {
        this.financialSponsor.emit(this.sponsorship);
    };
    __decorate([
        core_1.Input()
    ], SponsorComponent.prototype, "peeps");
    __decorate([
        core_1.Input()
    ], SponsorComponent.prototype, "contacts");
    __decorate([
        core_1.Input()
    ], SponsorComponent.prototype, "inst");
    __decorate([
        core_1.Output()
    ], SponsorComponent.prototype, "financialSponsor");
    SponsorComponent = __decorate([
        core_1.Component({
            selector: 'financial-sponsor',
            templateUrl: '../app/sponsor.component.html'
        })
    ], SponsorComponent);
    return SponsorComponent;
}());
exports.SponsorComponent = SponsorComponent;
//# sourceMappingURL=sponsor.component.js.map