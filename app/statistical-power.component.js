"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
        this.alphaInfo = '';
        this.betaInfo = '';
        this.testInfo = '';
        this.sampleInfo = '';
        this.mdesInfo = '';
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
        this.helpInfo = ['For assistance computing statistical power, you can use', 'freely available software for statistical power computations.'];
        this.gpowerLink = ['http://www.gpower.hhu.de/en.html', 'GPower*3'];
        this.helpClass = 'alert alert-warning';
    };
    StatisticalPowerComponent.prototype.undisplayHelpInfo = function () {
        this.helpInfo = ['', ''];
        this.gpowerLink = ['', ''];
        this.helpClass = '';
    };
    StatisticalPowerComponent.prototype.displayAlphaInfo = function () {
        this.alphaInfo = 'The alpha parameter defines the probability of a Type I error that is acceptable to the researcher; this is typically set to 0.05.  A Type I error is analogous to a false positive - a result that would suggest an effect exists when it does not truly exist.';
    };
    StatisticalPowerComponent.prototype.undisplayAlphaInfo = function () {
        this.alphaInfo = '';
    };
    StatisticalPowerComponent.prototype.displayBetaInfo = function () {
        this.betaInfo = 'The beta parameter defines the probability of a Type II error that is acceptable to the researcher; this is typically set to 0.20.  A Type II error is analogous to a false negative - a result that would suggest that no effect was observed when there was an effect.';
    };
    StatisticalPowerComponent.prototype.undisplayBetaInfo = function () {
        this.betaInfo = '';
    };
    StatisticalPowerComponent.prototype.displayTestInfo = function () {
        this.testInfo = 'This should be the type of statistical test used to test the hypothesis.  For example, if using a regression model, this would typically be a t-statistic, z-statistic, or Wald test; for ANOVA an F statistic; and for a test of how well an SEM fits the data a X^2 statistic.';
    };
    StatisticalPowerComponent.prototype.undisplayTestInfo = function () {
        this.testInfo = '';
    };
    StatisticalPowerComponent.prototype.displaySampleInfo = function () {
        this.sampleInfo = 'This is the total number of units of analysis that will be included in your study.  For student-level data, this would be the number of students.';
    };
    StatisticalPowerComponent.prototype.undisplaySampleInfo = function () {
        this.sampleInfo = '';
    };
    StatisticalPowerComponent.prototype.displayMDESInfo = function () {
        this.mdesInfo = 'The minimal detectable effect size is a function of sample size, test statistic, alpha, and beta levels.  This is the smallest size effect the study could potentially detect given these conditions.  In small samples, this will typically be very large and means you should include the appropriate caveats to explain what failing to reject the null hypothesis actually implies under those conditions.';
    };
    StatisticalPowerComponent.prototype.undisplayMDESInfo = function () {
        this.mdesInfo = '';
    };
    __decorate([
        core_1.Output()
    ], StatisticalPowerComponent.prototype, "superPowers");
    StatisticalPowerComponent = __decorate([
        core_1.Component({
            selector: 'statistical-power',
            templateUrl: '../app/statistical-power.component.html'
        })
    ], StatisticalPowerComponent);
    return StatisticalPowerComponent;
}());
exports.StatisticalPowerComponent = StatisticalPowerComponent;
//# sourceMappingURL=statistical-power.component.js.map