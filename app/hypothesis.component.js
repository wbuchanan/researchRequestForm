"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var hypothesis_1 = require("./hypothesis");
var HypothesisComponent = (function () {
    function HypothesisComponent(_fb) {
        this._fb = _fb;
        this.methods = ["Quantitative", "Qualitative", "Mixed Methods"];
        this.hypothesisEmitter = new core_1.EventEmitter();
        this.myHypotheses = new Array(new hypothesis_1.Hypothesis());
    }
    HypothesisComponent.prototype.ngOnInit = function () {
        this.hypotheses = this._fb.group({
            hypothesis: this._fb.array([this.initHypothesisFields()])
        });
    };
    HypothesisComponent.prototype.initHypothesisFields = function () {
        return this._fb.group({
            researchQuestion: ['', forms_1.Validators.required],
            methodology: ['', forms_1.Validators.required],
            analysis: ['', forms_1.Validators.required],
            dataRequirements: this.collection,
            statisticalPower: this.statPower
        });
    };
    HypothesisComponent.prototype.addHypothesisFields = function () {
        this.myHypotheses.push(new hypothesis_1.Hypothesis());
        var control = this.hypotheses.controls['hypothesis'];
        control.push(this.initHypothesisFields());
    };
    HypothesisComponent.prototype.removeHypothesisFields = function (i) {
        this.myHypotheses.pop();
        var control = this.hypotheses.controls['hypothesis'];
        control.removeAt(i);
    };
    HypothesisComponent.prototype.bindCollectionWindows = function (i, window) {
        this.myHypotheses[i].dataRequirements = window;
    };
    HypothesisComponent.prototype.bindStatisticalPower = function (i, power) {
        this.myHypotheses[i].statisticalPower = power;
    };
    HypothesisComponent.prototype.updateHypotheses = function () {
        this.hypothesisEmitter.emit(this.myHypotheses);
    };
    __decorate([
        core_1.Input()
    ], HypothesisComponent.prototype, "collection");
    __decorate([
        core_1.Input()
    ], HypothesisComponent.prototype, "statPower");
    __decorate([
        core_1.Output()
    ], HypothesisComponent.prototype, "hypothesisEmitter");
    HypothesisComponent = __decorate([
        core_1.Component({
            selector: 'hypothesis',
            templateUrl: '../app/hypothesis.component.html'
        })
    ], HypothesisComponent);
    return HypothesisComponent;
}());
exports.HypothesisComponent = HypothesisComponent;
//# sourceMappingURL=hypothesis.component.js.map