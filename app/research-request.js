"use strict";
var person_1 = require("./person");
var district_sponsor_1 = require("./district-sponsor");
var sponsor_1 = require("./sponsor");
var ResearchRequest = (function () {
    function ResearchRequest() {
        this.requestor = new person_1.Person();
        this.districtSponsor = new district_sponsor_1.DistrictSponsor();
        this.projectTitle = '';
        this.problemStatement = '';
        this.litReview = '';
        this.sponsoredResearch = false;
        this.financialSponsor = new sponsor_1.Sponsor();
        this.hypotheses = new Array();
        this.irbApproved = false;
        this.irbConditionalOnFCPS = false;
        this.forDegree = false;
        this.degreeLevel = '';
        this.academicAdvisor = new person_1.Person();
    }
    return ResearchRequest;
}());
exports.ResearchRequest = ResearchRequest;
//# sourceMappingURL=research-request.js.map