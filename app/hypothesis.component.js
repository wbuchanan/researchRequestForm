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
        this.myHypotheses = new Array(new hypothesis_1.Hypothesis());
    }
    HypothesisComponent.prototype.ngOnInit = function () {
        this.hypotheses = this._fb.group({
            hypothesis: this._fb.array([this.initHypothesisFields()])
        });
    };
    HypothesisComponent.prototype.initHypothesisFields = function () {
        return this._fb.group({
            isQuantitative: [true, forms_1.Validators.required],
            researchQuestion: ['', forms_1.Validators.required],
            methodology: ['', forms_1.Validators.required],
            statisticalModel: ['', forms_1.Validators.required],
            dataToCollect: this.collection,
            power: this.statPower
        });
    };
    HypothesisComponent.prototype.addCollectionWindowFields = function () {
        this.myHypotheses.push(new hypothesis_1.Hypothesis());
        var control = this.hypotheses.controls['hypothesis'];
        control.push(this.initHypothesisFields());
    };
    HypothesisComponent.prototype.removeCollectionWindowFields = function (i) {
        this.myHypotheses.pop();
        var control = this.hypotheses.controls['hypothesis'];
        control.removeAt(i);
    };
    HypothesisComponent.prototype.getHypotheses = function () {
        return this.myHypotheses;
    };
    __decorate([
        core_1.Input()
    ], HypothesisComponent.prototype, "collection");
    __decorate([
        core_1.Input()
    ], HypothesisComponent.prototype, "statPower");
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