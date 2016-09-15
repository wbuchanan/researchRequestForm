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
var people_component_1 = require('./people.component');
var contact_component_1 = require('./contact.component');
var institution_component_1 = require('./institution.component');
var person_1 = require('./person');
var forms_1 = require('@angular/forms');
var institution_1 = require("./institution");
var address_1 = require("./address");
var PersonComponent = (function () {
    function PersonComponent(_fb) {
        this._fb = _fb;
        this.requestor = new core_1.EventEmitter();
        this.employeeHelp = '';
        this.peep = new person_1.Person();
        this.defaultInst = new institution_1.Institution();
        this.defaultInst.name = '';
        this.defaultInst.department = '';
        this.defaultInst.address = new address_1.Address('', '', '', '', '', '', '', '', '', false);
    }
    PersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.person = this._fb.group({
            person: this.peeps,
            isFCPS: [false],
            contactInfo: this.contacts,
            institutionalAffiliation: this.inst
        });
        var isEmployee = this.person.controls['isFCPS'];
        isEmployee.valueChanges.subscribe(function (data) {
            if (data) {
                _this.defaultInst.name = 'Fayette County Public Schools';
                _this.defaultInst.department = 'IAKSS';
                _this.defaultInst.address = new address_1.Address('701', 'E', 'Main', 'ST', '', '', 'Lexington', 'KY', '40502', false);
            }
            else {
                _this.defaultInst.name = '';
                _this.defaultInst.department = '';
                _this.defaultInst.address = new address_1.Address('', '', '', '', '', '', '', '', '', false);
            }
            _this.updateRequestor();
        });
    };
    PersonComponent.prototype.ngOnChanges = function (changes) {
        this.updateRequestor();
    };
    PersonComponent.prototype.bindPersonObject = function (person) {
        this.peep.person = person;
    };
    PersonComponent.prototype.bindContactInformation = function (contactInfo) {
        this.peep.contactInfo = contactInfo;
    };
    PersonComponent.prototype.bindInstitutionInformation = function (institution) {
        this.peep.institutionalAffiliation = institution;
    };
    PersonComponent.prototype.displayEmployeeHelp = function () {
        this.employeeHelp = 'Check this box if you are employed by Fayette County Public Schools.';
    };
    PersonComponent.prototype.undisplayEmployeeHelp = function () {
        this.employeeHelp = '';
    };
    PersonComponent.prototype.updateRequestor = function () {
        this.requestor.emit(this.peep);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', people_component_1.PeopleComponent)
    ], PersonComponent.prototype, "peeps", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', contact_component_1.ContactComponent)
    ], PersonComponent.prototype, "contacts", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', institution_component_1.InstitutionComponent)
    ], PersonComponent.prototype, "inst", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PersonComponent.prototype, "title", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PersonComponent.prototype, "requestor", void 0);
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'person',
            templateUrl: '../app/person.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map