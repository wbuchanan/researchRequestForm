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
var forms_1 = require("@angular/forms");
var person_component_1 = require("./person.component");
var http_1 = require("@angular/http");
var data_request_1 = require("./data-request");
var existing_data_component_1 = require("./existing-data.component");
var existing_data_1 = require("./existing-data");
var DataRequestComponent = (function () {
    function DataRequestComponent(_fb, http) {
        this._fb = _fb;
        this.http = http;
        this.theRequest = new core_1.EventEmitter();
        this.backendURL = 'localhost:9200/';
        this.request = new data_request_1.DataRequest();
        this.submitted = false;
    }
    DataRequestComponent.prototype.ngOnInit = function () {
        this.dataRequest = this._fb.group({
            requestor: this.requestingPerson,
            existingReport: [false],
            requestedData: this.theData,
            researchQuestion: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(200)]],
            existingReportName: ['', forms_1.Validators.required]
        });
    };
    DataRequestComponent.prototype.bindPersonObject = function (person) {
        this.request.requestor = person;
    };
    DataRequestComponent.prototype.bindExistingData = function (existData) {
        this.request.requestedData = (existData || new existing_data_1.ExistingData());
    };
    DataRequestComponent.prototype.updateDataRequest = function () {
        this.theRequest.emit(this.request);
    };
    DataRequestComponent.prototype.submit = function () {
        this.submitted = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', person_component_1.PersonComponent)
    ], DataRequestComponent.prototype, "requestingPerson", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', existing_data_component_1.ExistingDataComponent)
    ], DataRequestComponent.prototype, "theData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DataRequestComponent.prototype, "theRequest", void 0);
    DataRequestComponent = __decorate([
        core_1.Component({
            selector: 'data-request',
            templateUrl: '../app/data-request.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, http_1.Http])
    ], DataRequestComponent);
    return DataRequestComponent;
}());
exports.DataRequestComponent = DataRequestComponent;
//# sourceMappingURL=data-request.component.js.map