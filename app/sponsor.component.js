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
        core_1.Input(), 
        __metadata('design:type', people_component_1.PeopleComponent)
    ], SponsorComponent.prototype, "peeps", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', contact_component_1.ContactComponent)
    ], SponsorComponent.prototype, "contacts", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', institution_component_1.InstitutionComponent)
    ], SponsorComponent.prototype, "inst", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SponsorComponent.prototype, "financialSponsor", void 0);
    SponsorComponent = __decorate([
        core_1.Component({
            selector: 'financial-sponsor',
            templateUrl: '../app/sponsor.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], SponsorComponent);
    return SponsorComponent;
}());
exports.SponsorComponent = SponsorComponent;
//# sourceMappingURL=sponsor.component.js.map