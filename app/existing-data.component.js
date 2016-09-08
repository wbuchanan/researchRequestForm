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
var existing_data_1 = require('./existing-data');
var forms_1 = require('@angular/forms');
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
    ExistingDataComponent.prototype.getExistingDataRequest = function () {
        return this.existing;
    };
    ExistingDataComponent.prototype.update = function () {
        this.currentData.emit(this.getExistingDataRequest());
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ExistingDataComponent.prototype, "currentData", void 0);
    ExistingDataComponent = __decorate([
        core_1.Component({
            selector: 'existing-data',
            templateUrl: '../app/existing-data.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ExistingDataComponent);
    return ExistingDataComponent;
}());
exports.ExistingDataComponent = ExistingDataComponent;
//# sourceMappingURL=existing-data.component.js.map