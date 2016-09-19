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
///<reference path="date-range.validator.ts"/>
var core_1 = require('@angular/core');
var collection_window_1 = require('./collection-window');
var measures_component_1 = require('./measures.component');
var existing_data_component_1 = require('./existing-data.component');
var forms_1 = require('@angular/forms');
var date_range_validator_1 = require('./date-range.validator');
var CollectionWindowComponent = (function () {
    function CollectionWindowComponent(_fb) {
        this._fb = _fb;
        this.theDatesRaw = { start: new Date(Date.now()), end: new Date(Date.now()) };
        this.outputWindows = new core_1.EventEmitter();
        this.collection = new Array(new collection_window_1.CollectionWindow());
        this.openWindow = '';
        this.closeWindow = '';
        this.areYouCollectingData = '';
        this.areYouRequestingData = '';
        this.theDatesRaw.end.setFullYear(this.theDatesRaw.end.getFullYear() + 5);
        this.theDates = {
            "starting": this.theDatesRaw.start.toISOString().substring(0, 10),
            "ending": this.theDatesRaw.end.toISOString().substring(0, 10),
            "placeHolder": (this.theDatesRaw.start.toISOString().substring(5, 7)).concat('/')
                .concat(this.theDatesRaw.start.toISOString().substring(8, 10)).concat('/')
                .concat(this.theDatesRaw.start.toISOString().substring(0, 4))
        };
    }
    CollectionWindowComponent.prototype.ngOnInit = function () {
        this.dataCollection = this._fb.group({
            collectionWindow: this._fb.array([this.initCollectionWindowFields()])
        });
    };
    CollectionWindowComponent.prototype.initCollectionWindowFields = function () {
        return this._fb.group({
            startDate: ['', [forms_1.Validators.required, date_range_validator_1.checkDateRange()]],
            endDate: ['', [forms_1.Validators.required, date_range_validator_1.checkDateRange()]],
            collectingData: [false],
            dataToCollect: [this.measurement],
            needFcpsData: [false],
            fcpsData: [this.existing]
        });
    };
    CollectionWindowComponent.prototype.addCollectionWindowFields = function () {
        this.collection.push(new collection_window_1.CollectionWindow());
        var control = this.dataCollection.controls['collectionWindow'];
        control.push(this.initCollectionWindowFields());
    };
    CollectionWindowComponent.prototype.removeCollectionWindowFields = function (i) {
        this.collection.pop();
        var control = this.dataCollection.controls['collectionWindow'];
        control.removeAt(i);
    };
    CollectionWindowComponent.prototype.addMeasures = function (i, measures) {
        this.collection[i].dataToCollect = measures;
    };
    CollectionWindowComponent.prototype.currentData = function (i, existsData) {
        this.collection[i].fcpsData = existsData;
    };
    CollectionWindowComponent.prototype.setMinDate = function (i) {
        console.log(this.collection[i].startDate);
        var indate = new Date(this.collection[i].startDate);
        var sdate = new Date(this.theDates.starting);
        return indate < sdate ? indate : sdate;
    };
    CollectionWindowComponent.prototype.displayOpenWindowHelp = function () {
        this.openWindow = 'This is the earliest date of the data collected (e.g., students enrolled as of ..., or collecting data starting on ...).';
    };
    CollectionWindowComponent.prototype.undisplayOpenWindowHelp = function () {
        this.openWindow = '';
    };
    CollectionWindowComponent.prototype.displayCloseWindowHelp = function () {
        this.closeWindow = 'This is the last date of the data collected (e.g., students enrolled as of ..., or collecting data starting on ...).';
    };
    CollectionWindowComponent.prototype.undisplayCloseWindowHelp = function () {
        this.closeWindow = '';
    };
    CollectionWindowComponent.prototype.displayCollectingData = function () {
        this.areYouCollectingData = 'Check this box if you plan to collect your own data for this research project.';
    };
    CollectionWindowComponent.prototype.undisplayCollectingData = function () {
        this.areYouCollectingData = '';
    };
    CollectionWindowComponent.prototype.displayRequestingData = function () {
        this.areYouRequestingData = 'Check this box if you need DRA to query data from FCPS data systems.';
    };
    CollectionWindowComponent.prototype.undisplayRequestingData = function () {
        this.areYouRequestingData = '';
    };
    CollectionWindowComponent.prototype.updateCollectionWindow = function () {
        this.outputWindows.emit(this.collection);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CollectionWindowComponent.prototype, "outputWindows", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', measures_component_1.MeasuresComponent)
    ], CollectionWindowComponent.prototype, "measurement", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', existing_data_component_1.ExistingDataComponent)
    ], CollectionWindowComponent.prototype, "existing", void 0);
    CollectionWindowComponent = __decorate([
        core_1.Component({
            selector: 'collection-window',
            templateUrl: '../app/collection-window.component.html',
            providers: [{ provide: forms_1.NG_VALIDATORS, useValue: date_range_validator_1.checkDateRange, multi: false }]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], CollectionWindowComponent);
    return CollectionWindowComponent;
}());
exports.CollectionWindowComponent = CollectionWindowComponent;
//# sourceMappingURL=collection-window.component.js.map