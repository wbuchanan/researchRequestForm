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
var research_request_1 = require("./research-request");
var forms_1 = require("@angular/forms");
var person_component_1 = require("./person.component");
var district_sponsor_component_1 = require("./district-sponsor.component");
var sponsor_component_1 = require("./sponsor.component");
var hypothesis_component_1 = require("./hypothesis.component");
var http_1 = require("@angular/http");
var ResearchRequestComponent = (function () {
    function ResearchRequestComponent(_fb, http) {
        this._fb = _fb;
        this.http = http;
        this.theRequest = new core_1.EventEmitter();
        this.backendURL = 'localhost:9200/';
        this.request = new research_request_1.ResearchRequest();
        this.submitted = false;
    }
    ResearchRequestComponent.prototype.ngOnInit = function () {
        this.researchRequest = this._fb.group({
            requestor: this.requestingPerson,
            districtSponsor: this.distSponsor,
            projectTitle: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(200)]],
            problemStatement: ['', [forms_1.Validators.required, forms_1.Validators.minLength(200), forms_1.Validators.maxLength(10000)]],
            litReview: ['', [forms_1.Validators.required, forms_1.Validators.minLength(200), forms_1.Validators.maxLength(10000)]],
            sponsoredResearch: [false],
            financialSponsor: this.finSponsor,
            hypotheses: this.hypothesisArray,
            irbApproved: [false],
            irbConditionalOnFCPS: [false],
            forDegree: [false],
            degreeLevel: ['']
        });
    };
    ResearchRequestComponent.prototype.bindPersonObject = function (person) {
        this.request.requestor = person;
    };
    ResearchRequestComponent.prototype.bindDistrictSponsor = function (distSponsor) {
        this.request.districtSponsor = distSponsor;
    };
    ResearchRequestComponent.prototype.bindFinancialSponsor = function (financeSponsor) {
        this.request.financialSponsor = financeSponsor;
    };
    ResearchRequestComponent.prototype.bindHypotheses = function (hypotheses) {
        this.request.hypotheses = hypotheses;
    };
    ResearchRequestComponent.prototype.updateResearchRequest = function () {
        this.theRequest.emit(this.request);
    };
    ResearchRequestComponent.prototype.submit = function () {
        this.submitted = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', person_component_1.PersonComponent)
    ], ResearchRequestComponent.prototype, "requestingPerson", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', district_sponsor_component_1.DistrictSponsorComponent)
    ], ResearchRequestComponent.prototype, "distSponsor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', sponsor_component_1.SponsorComponent)
    ], ResearchRequestComponent.prototype, "finSponsor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hypothesis_component_1.HypothesisComponent)
    ], ResearchRequestComponent.prototype, "hypothesisArray", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ResearchRequestComponent.prototype, "theRequest", void 0);
    ResearchRequestComponent = __decorate([
        core_1.Component({
            selector: 'research-request',
            templateUrl: '../app/research-request.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, http_1.Http])
    ], ResearchRequestComponent);
    return ResearchRequestComponent;
}());
exports.ResearchRequestComponent = ResearchRequestComponent;
//# sourceMappingURL=research-request.component.js.map