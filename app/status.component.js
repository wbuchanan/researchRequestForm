"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var status_1 = require('./status');
var forms_1 = require('@angular/forms');
var date_range_validator_1 = require('./date-range.validator');
var StatusComponent = (function () {
    function StatusComponent(_fb) {
        this._fb = _fb;
        this.statuses = new Array(new status_1.Status());
        this.statusCategories = ["Submitted", "In Progress", "Awaiting Approval", "Assigned", "Rejected",
            "Forward to Other Department", "Additional Information Required", "Completed"];
        this.theStatus = new core_1.EventEmitter();
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.statusForm = this._fb.group({
            status: this._fb.array([this.initStatusFields()])
        });
    };
    StatusComponent.prototype.initStatusFields = function () {
        return this._fb.group({
            openedDate: ['', [forms_1.Validators.required, date_range_validator_1.checkDateRange]],
            closedDate: [''],
            statusCategory: ['', forms_1.Validators.required],
            assignedTo: this.assignee,
            emailBody: ['', [forms_1.Validators.required, forms_1.Validators.pattern('^([\w]+ ){10,}')]],
            internalNotes: ['']
        });
    };
    StatusComponent.prototype.addStatusFields = function () {
        this.statuses.push(new status_1.Status());
        var control = this.statusForm.controls['status'];
        control.push(this.initStatusFields());
    };
    StatusComponent.prototype.removeStatusFields = function (i) {
        this.statuses.pop();
        var control = this.statusForm.controls['status'];
        control.removeAt(i);
    };
    StatusComponent.prototype.updateStatus = function () {
        this.theStatus.emit(this.statuses);
    };
    __decorate([
        core_1.Output()
    ], StatusComponent.prototype, "theStatus");
    __decorate([
        core_1.Input()
    ], StatusComponent.prototype, "assignee");
    StatusComponent = __decorate([
        core_1.Component({
            selector: 'status',
            templateUrl: '../app/status.component.html'
        })
    ], StatusComponent);
    return StatusComponent;
}());
exports.StatusComponent = StatusComponent;
//# sourceMappingURL=status.component.js.map