"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var person_1 = require('./person');
var institution_1 = require("./institution");
var address_1 = require("./address");
var PersonComponent = (function () {
    function PersonComponent(_fb) {
        this._fb = _fb;
        this.requestor = new core_1.EventEmitter();
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
    PersonComponent.prototype.updateRequestor = function () {
        this.requestor.emit(this.peep);
    };
    __decorate([
        core_1.Input()
    ], PersonComponent.prototype, "peeps");
    __decorate([
        core_1.Input()
    ], PersonComponent.prototype, "contacts");
    __decorate([
        core_1.Input()
    ], PersonComponent.prototype, "inst");
    __decorate([
        core_1.Input()
    ], PersonComponent.prototype, "title");
    __decorate([
        core_1.Output()
    ], PersonComponent.prototype, "requestor");
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'person',
            templateUrl: '../app/person.component.html'
        })
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map