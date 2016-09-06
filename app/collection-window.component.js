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
var measures_component_1 = require('./measures.component');
var existing_data_component_1 = require('./existing-data.component');
var forms_1 = require('@angular/forms');
var CollectionWindowComponent = (function () {
    function CollectionWindowComponent(_fb, measurement, existing) {
        this._fb = _fb;
        this.measurement = measurement;
        this.existing = existing;
        var currentDate = new Date(Date.now());
        this.theDatesRaw = [currentDate, currentDate];
        this.theDatesRaw[1].setFullYear(this.theDatesRaw[1].getFullYear() + 5);
        this.theDates = {
            "starting": this.theDatesRaw[0].toISOString().substring(0, 10),
            "ending": this.theDatesRaw[1].toISOString().substring(0, 10),
            "placeHolder": (this.theDatesRaw[0].toISOString().substring(5, 7)).concat('/')
                .concat(this.theDatesRaw[0].toISOString().substring(8, 10)).concat('/')
                .concat(this.theDatesRaw[0].toISOString().substring(0, 4))
        };
    }
    CollectionWindowComponent.prototype.ngOnInit = function () {
        this.dataCollection = this._fb.group({
            collectionWindow: this._fb.array([this.initCollectionWindowFields()])
        });
    };
    CollectionWindowComponent.prototype.initCollectionWindowFields = function () {
        return this._fb.group({
            collectionId: [],
            startDate: ['', forms_1.Validators.required],
            endDate: ['', forms_1.Validators.required],
            collectingData: [false],
            dataToCollect: this.measurement,
            needFcpsData: [false],
            fcpsData: this.existing
        });
    };
    CollectionWindowComponent.prototype.addCollectionWindowFields = function () {
        var control = this.dataCollection.controls['collectionWindow'];
        control.push(this.initCollectionWindowFields());
    };
    CollectionWindowComponent.prototype.removeCollectionWindowFields = function (i) {
        var control = this.dataCollection.controls['collectionWindow'];
        control.removeAt(i);
    };
    CollectionWindowComponent.prototype.save = function (model) {
        console.log(model);
    };
    CollectionWindowComponent = __decorate([
        core_1.Component({
            selector: 'collection-window',
            templateUrl: '../app/collection-window.component.html',
            providers: [measures_component_1.MeasuresComponent, existing_data_component_1.ExistingDataComponent]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, measures_component_1.MeasuresComponent, existing_data_component_1.ExistingDataComponent])
    ], CollectionWindowComponent);
    return CollectionWindowComponent;
}());
exports.CollectionWindowComponent = CollectionWindowComponent;
//# sourceMappingURL=collection-window.component.js.map