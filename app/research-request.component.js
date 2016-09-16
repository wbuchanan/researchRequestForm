"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var research_request_1 = require("./research-request");
var forms_1 = require("@angular/forms");
var ResearchRequestComponent = (function () {
    function ResearchRequestComponent(_fb, http) {
        this._fb = _fb;
        this.http = http;
        this.theRequest = new core_1.EventEmitter();
        this.requestorTitle = 'Requestor Information: ';
        this.advisorTitle = 'Academic Advisor Information: ';
        this.backendURL = 'localhost:9200/';
        this.degreeLevels = ['Doctorate', 'Masters', 'Bachelors'];
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
            forDegree: [],
            degreeLevel: [''],
            academicAdvisor: this.academicSupervisor
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
    ResearchRequestComponent.prototype.bindAcademicAdvisor = function (person) {
        this.request.academicAdvisor = person;
    };
    ResearchRequestComponent.prototype.updateResearchRequest = function () {
        this.theRequest.emit(this.request);
    };
    ResearchRequestComponent.prototype.submit = function () {
        this.submitted = true;
    };
    __decorate([
        core_1.Input()
    ], ResearchRequestComponent.prototype, "requestingPerson");
    __decorate([
        core_1.Input()
    ], ResearchRequestComponent.prototype, "distSponsor");
    __decorate([
        core_1.Input()
    ], ResearchRequestComponent.prototype, "finSponsor");
    __decorate([
        core_1.Input()
    ], ResearchRequestComponent.prototype, "hypothesisArray");
    __decorate([
        core_1.Output()
    ], ResearchRequestComponent.prototype, "theRequest");
    __decorate([
        core_1.Input()
    ], ResearchRequestComponent.prototype, "academicSupervisor");
    ResearchRequestComponent = __decorate([
        core_1.Component({
            selector: 'research-request',
            templateUrl: '../app/research-request.component.html'
        })
    ], ResearchRequestComponent);
    return ResearchRequestComponent;
}());
exports.ResearchRequestComponent = ResearchRequestComponent;
//# sourceMappingURL=research-request.component.js.map