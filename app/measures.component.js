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
var measures_1 = require('./measures');
var forms_1 = require('@angular/forms');
var unitsOfMeasurement_1 = require('./unitsOfMeasurement');
var MeasuresComponent = (function () {
    function MeasuresComponent(_fb) {
        this._fb = _fb;
        this.timeUnits = ["seconds", "minutes", "hours", "class periods", "days"];
        this.units = unitsOfMeasurement_1.UNIT_OF_MEASUREMENT;
        this.measurement = new Array(new measures_1.Measures());
    }
    MeasuresComponent.prototype.ngOnInit = function () {
        this.measures = this._fb.group({
            measure: this._fb.array([this.initMeasureFields()])
        });
    };
    MeasuresComponent.prototype.initMeasureFields = function () {
        return this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z0-9]+')]],
            unitOfMeasurement: ['', forms_1.Validators.required],
            references: [''],
            pilot: [false, forms_1.Validators.required],
            administrationTime: [10, forms_1.Validators.required],
            administrationTimeUnits: ['minutes', forms_1.Validators.required]
        });
    };
    MeasuresComponent.prototype.addMeasureFields = function () {
        this.measurement.push(new measures_1.Measures());
        var control = this.measures.controls['measure'];
        control.push(this.initMeasureFields());
    };
    MeasuresComponent.prototype.removeMeasureFields = function (i) {
        this.measurement.pop();
        var control = this.measures.controls['measure'];
        control.removeAt(i);
    };
    MeasuresComponent.prototype.getMeasurementTools = function () {
        return this.measurement;
    };
    MeasuresComponent = __decorate([
        core_1.Component({
            selector: 'measures',
            templateUrl: '../app/measures.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], MeasuresComponent);
    return MeasuresComponent;
}());
exports.MeasuresComponent = MeasuresComponent;
//# sourceMappingURL=measures.component.js.map