/**
 * Created by billy on 8/31/16.
 */
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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var measures_component_1 = require('./measures.component');
var address_component_1 = require('./address.component');
var collection_window_component_1 = require('./collection-window.component');
var contact_component_1 = require('./contact.component');
var existing_data_component_1 = require('./existing-data.component');
var phone_component_1 = require("./phone.component");
var email_component_1 = require("./email.component");
var district_sponsor_component_1 = require("./district-sponsor.component");
var sponsor_component_1 = require("./sponsor.component");
var people_component_1 = require("./people.component");
var statistical_power_component_1 = require("./statistical-power.component");
var person_component_1 = require("./person.component");
var institution_component_1 = require("./institution.component");
var hypothesis_component_1 = require("./hypothesis.component");
var status_component_1 = require("./status.component");
var http_1 = require('@angular/http');
var research_request_component_1 = require("./research-request.component");
var data_request_component_1 = require("./data-request.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, http_1.JsonpModule],
            declarations: [app_component_1.AppComponent, measures_component_1.MeasuresComponent, address_component_1.AddressComponent, collection_window_component_1.CollectionWindowComponent, contact_component_1.ContactComponent,
                status_component_1.StatusComponent, research_request_component_1.ResearchRequestComponent, data_request_component_1.DataRequestComponent,
                existing_data_component_1.ExistingDataComponent, phone_component_1.PhoneComponent, email_component_1.EmailComponent, district_sponsor_component_1.DistrictSponsorComponent, hypothesis_component_1.HypothesisComponent,
                sponsor_component_1.SponsorComponent, institution_component_1.InstitutionComponent, person_component_1.PersonComponent, people_component_1.PeopleComponent, statistical_power_component_1.StatisticalPowerComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map