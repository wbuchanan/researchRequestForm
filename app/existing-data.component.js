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
        this.helpStudentLevel = '';
        this.helpClassRoomLevel = '';
        this.helpTeacherLevel = '';
        this.helpGradeLevel = '';
        this.helpSchoolLevel = '';
        this.helpDistrictLevel = '';
        this.existing = new existing_data_1.ExistingData();
        this.helpDisplay = '';
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
    ExistingDataComponent.prototype.displayHelpStudentLevel = function () {
        this.helpStudentLevel = 'Use this field to identify individual student-level data.  For example, if you wanted a data set of student records with sex, race, EL status, and test scores, you would request that here.';
    };
    ExistingDataComponent.prototype.displayHelpClassRoomLevel = function () {
        this.helpClassRoomLevel = 'Use this field to specify student level data that you would like aggregated at the classroom level.  For example, if you wanted to know the percent of EL students per class in a school you would enter that here.';
    };
    ExistingDataComponent.prototype.displayHelpTeacherLevel = function () {
        this.helpTeacherLevel = 'Use this field to specify teacher-level data.  For example, if you wanted a data set of teacher records with the sex, race, and National Board Certification indicator for teachers you would request that here.';
    };
    ExistingDataComponent.prototype.displayHelpGradeLevel = function () {
        this.helpGradeLevel = 'Use this field to specify student and/or teacher level data that you would like aggregated at the grade level.  For example, if you wanted to know the number of 3rd grade teachers in a school, you would enter that here.';
    };
    ExistingDataComponent.prototype.displayHelpSchoolLevel = function () {
        this.helpSchoolLevel = 'Use this field to specify student and/or teacher level that that you would like aggregated at the school level.  For example, if you wanted to know the percentage of teachers at each school with a Master\'s degree or higher you would request that here.';
    };
    ExistingDataComponent.prototype.displayHelpDistrictLevel = function () {
        this.helpDistrictLevel = 'Use this field to specify student and/or teacher level that that you would like aggregated at the district level.  For example, if you wanted to know the percentage of students in the gifted/talented program across the district by race you would request that here.';
    };
    ExistingDataComponent.prototype.undisplayHelpStudentLevel = function () {
        this.helpStudentLevel = '';
    };
    ExistingDataComponent.prototype.undisplayHelpClassRoomLevel = function () {
        this.helpClassRoomLevel = '';
    };
    ExistingDataComponent.prototype.undisplayHelpTeacherLevel = function () {
        this.helpTeacherLevel = '';
    };
    ExistingDataComponent.prototype.undisplayHelpGradeLevel = function () {
        this.helpGradeLevel = '';
    };
    ExistingDataComponent.prototype.undisplayHelpSchoolLevel = function () {
        this.helpSchoolLevel = '';
    };
    ExistingDataComponent.prototype.undisplayHelpDistrictLevel = function () {
        this.helpDistrictLevel = '';
    };
    ExistingDataComponent.prototype.updateExistingData = function () {
        this.currentData.emit(this.existing);
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