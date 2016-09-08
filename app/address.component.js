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
var address_1 = require('../app/address');
var forms_1 = require('@angular/forms');
var secondary_units_1 = require('../app/secondary-units');
var street_type_abbreviations_1 = require('../app/street-type-abbreviations');
var AddressComponent = (function () {
    function AddressComponent(_fb) {
        this._fb = _fb;
        this.enterAddress = new core_1.EventEmitter();
        this.directions = ['', 'N', 'S', 'E', 'W', 'NE', 'NW', 'SE', 'SW'];
        this.secUnits = secondary_units_1.SECONDARY_UNITS;
        this.streetTypes = street_type_abbreviations_1.STREET_TYPES;
        this.cszips = [{ "statenm": "ALABAMA", "stusps": "AL" },
            { "statenm": "ALASKA", "stusps": "AK" },
            { "statenm": "ARIZONA", "stusps": "AZ" },
            { "statenm": "ARKANSAS", "stusps": "AR" },
            { "statenm": "CALIFORNIA", "stusps": "CA" },
            { "statenm": "COLORADO", "stusps": "CO" },
            { "statenm": "CONNECTICUT", "stusps": "CT" },
            { "statenm": "DELAWARE", "stusps": "DE" },
            { "statenm": "FLORIDA", "stusps": "FL" },
            { "statenm": "GEORGIA", "stusps": "GA" },
            { "statenm": "HAWAII", "stusps": "HI" },
            { "statenm": "IDAHO", "stusps": "ID" },
            { "statenm": "ILLINOIS", "stusps": "IL" },
            { "statenm": "INDIANA", "stusps": "IN" },
            { "statenm": "IOWA", "stusps": "IA" },
            { "statenm": "KANSAS", "stusps": "KS" },
            { "statenm": "KENTUCKY", "stusps": "KY" },
            { "statenm": "LOUISIANA", "stusps": "LA" },
            { "statenm": "MAINE", "stusps": "ME" },
            { "statenm": "MARYLAND", "stusps": "MD" },
            { "statenm": "MASSACHUSETTS", "stusps": "MA" },
            { "statenm": "MICHIGAN", "stusps": "MI" },
            { "statenm": "MINNESOTA", "stusps": "MN" },
            { "statenm": "MISSISSIPPI", "stusps": "MS" },
            { "statenm": "MISSOURI", "stusps": "MO" },
            { "statenm": "MONTANA", "stusps": "MT" },
            { "statenm": "NEBRASKA", "stusps": "NE" },
            { "statenm": "NEVADA", "stusps": "NV" },
            { "statenm": "NEW HAMPSHIRE", "stusps": "NH" },
            { "statenm": "NEW JERSEY", "stusps": "NJ" },
            { "statenm": "NEW MEXICO", "stusps": "NM" },
            { "statenm": "NEW YORK", "stusps": "NY" },
            { "statenm": "NORTH CAROLINA", "stusps": "NC" },
            { "statenm": "NORTH DAKOTA", "stusps": "ND" },
            { "statenm": "OHIO", "stusps": "OH" },
            { "statenm": "OKLAHOMA", "stusps": "OK" },
            { "statenm": "OREGON", "stusps": "OR" },
            { "statenm": "PENNSYLVANIA", "stusps": "PA" },
            { "statenm": "RHODE ISLAND", "stusps": "RI" },
            { "statenm": "SOUTH CAROLINA", "stusps": "SC" },
            { "statenm": "SOUTH DAKOTA", "stusps": "SD" },
            { "statenm": "TENNESSEE", "stusps": "TN" },
            { "statenm": "TEXAS", "stusps": "TX" },
            { "statenm": "UTAH", "stusps": "UT" },
            { "statenm": "VERMONT", "stusps": "VT" },
            { "statenm": "VIRGINIA", "stusps": "VA" },
            { "statenm": "WASHINGTON", "stusps": "WA" },
            { "statenm": "WEST VIRGINIA", "stusps": "WV" },
            { "statenm": "WISCONSIN", "stusps": "WI" },
            { "statenm": "WYOMING", "stusps": "WY" }];
        this.address = new address_1.Address();
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.physicalAddress = this._fb.group({
            streetNumber: ['', forms_1.Validators.pattern('[^\\s]')],
            streetDirection: [''],
            streetName: [''],
            streetType: [''],
            secondLine: [false],
            unitType: [''],
            unitNumber: [''],
            city: ['', forms_1.Validators.required],
            state: ['', forms_1.Validators.required],
            zipCode: ['', [forms_1.Validators.required, forms_1.Validators.pattern('(([0-9]{5})|([0-9]{5}-[0-9]{4}))')]]
        });
    };
    AddressComponent.prototype.updateAddress = function () {
        this.enterAddress.emit(this.address);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AddressComponent.prototype, "enterAddress", void 0);
    AddressComponent = __decorate([
        core_1.Component({
            selector: 'address',
            templateUrl: '../app/address.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map