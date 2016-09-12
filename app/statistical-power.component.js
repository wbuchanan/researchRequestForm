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
var statistical_power_1 = require('./statistical-power');
var forms_1 = require('@angular/forms');
var StatisticalPowerComponent = (function () {
    function StatisticalPowerComponent(_fb) {
        this._fb = _fb;
        // Emits the Statistical Power object
        this.superPowers = new core_1.EventEmitter();
        this.power = new statistical_power_1.StatisticalPower();
        this.helpInfo = ['', ''];
        this.gpowerLink = ['', ''];
        this.helpClass = '';
    }
    StatisticalPowerComponent.prototype.ngOnInit = function () {
        this.statPower = this._fb.group({
            alpha: [, forms_1.Validators.required],
            beta: [, forms_1.Validators.required],
            statistic: ['', forms_1.Validators.required],
            totalSampleSize: [, forms_1.Validators.required],
            minimalDetectableEffect: [, forms_1.Validators.required]
        });
    };
    StatisticalPowerComponent.prototype.updateStatisticalPower = function () {
        this.superPowers.emit(this.power);
    };
    StatisticalPowerComponent.prototype.displayHelpInfo = function () {
        this.helpInfo = ['For assistance computing statistical power, you can use', 'freely available software for statistical power computations.',
            this.gpowerLink = ['http://www.gpower.hhu.de/en.html', 'GPower*3'],
            this.helpClass = 'alert alert-warning'];
    };
    StatisticalPowerComponent.prototype.undisplayHelpInfo = function () {
        this.helpInfo = ['', ''];
        this.gpowerLink = ['', ''];
        this.helpClass = '';
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], StatisticalPowerComponent.prototype, "superPowers", void 0);
    StatisticalPowerComponent = __decorate([
        core_1.Component({
            selector: 'statistical-power',
            templateUrl: '../app/statistical-power.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], StatisticalPowerComponent);
    return StatisticalPowerComponent;
}());
exports.StatisticalPowerComponent = StatisticalPowerComponent;
//# sourceMappingURL=statistical-power.component.js.map