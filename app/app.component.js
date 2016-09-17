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
var existing_data_component_1 = require("./existing-data.component");
var contact_component_1 = require("./contact.component");
var collection_window_component_1 = require("./collection-window.component");
var address_component_1 = require("./address.component");
var measures_component_1 = require("./measures.component");
var district_sponsor_component_1 = require("./district-sponsor.component");
var sponsor_component_1 = require("./sponsor.component");
var phone_component_1 = require("./phone.component");
var hypothesis_component_1 = require("./hypothesis.component");
var status_component_1 = require("./status.component");
var research_request_component_1 = require("./research-request.component");
var data_request_component_1 = require("./data-request.component");
var email_component_1 = require("./email.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', measures_component_1.MeasuresComponent)
    ], AppComponent.prototype, "measures", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', existing_data_component_1.ExistingDataComponent)
    ], AppComponent.prototype, "existingData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', address_component_1.AddressComponent)
    ], AppComponent.prototype, "addy", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', contact_component_1.ContactComponent)
    ], AppComponent.prototype, "contactInformation", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', collection_window_component_1.CollectionWindowComponent)
    ], AppComponent.prototype, "collectionWindow", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', district_sponsor_component_1.DistrictSponsorComponent)
    ], AppComponent.prototype, "districtSponsor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', sponsor_component_1.SponsorComponent)
    ], AppComponent.prototype, "financialSponsor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', phone_component_1.PhoneComponent)
    ], AppComponent.prototype, "phone", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hypothesis_component_1.HypothesisComponent)
    ], AppComponent.prototype, "hypoetheses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', status_component_1.StatusComponent)
    ], AppComponent.prototype, "statuses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', research_request_component_1.ResearchRequestComponent)
    ], AppComponent.prototype, "researchRequest", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', data_request_component_1.DataRequestComponent)
    ], AppComponent.prototype, "dataRequest", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', email_component_1.EmailComponent)
    ], AppComponent.prototype, "email", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: '../app/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map