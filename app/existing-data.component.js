"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var existing_data_1 = require('./existing-data');
var ExistingDataComponent = (function () {
    function ExistingDataComponent(_fb) {
        this._fb = _fb;
        this.currentData = new core_1.EventEmitter();
        this.existing = new existing_data_1.ExistingData();
    }
    ExistingDataComponent.prototype.ngOnInit = function () {
        this.existingData = this._fb.group({
            studentLevel: [''],
            classRoomLevel: [''],
            teacherLevel: [''],
            gradeLevel: [''],
            schoolLevel: [''],
            districtLevel: ['']
        });
    };
    ExistingDataComponent.prototype.updateExistingData = function () {
        this.currentData.emit(this.existing);
    };
    __decorate([
        core_1.Output()
    ], ExistingDataComponent.prototype, "currentData");
    ExistingDataComponent = __decorate([
        core_1.Component({
            selector: 'existing-data',
            templateUrl: '../app/existing-data.component.html'
        })
    ], ExistingDataComponent);
    return ExistingDataComponent;
}());
exports.ExistingDataComponent = ExistingDataComponent;
//# sourceMappingURL=existing-data.component.js.map