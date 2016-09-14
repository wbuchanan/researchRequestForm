"use strict";
var Address = (function () {
    function Address(stNumber, stDirection, stName, stType, uType, uNumber, cityName, stateName, zip, line2) {
        this.stNumber = stNumber;
        this.stDirection = stDirection;
        this.stName = stName;
        this.stType = stType;
        this.uType = uType;
        this.uNumber = uNumber;
        this.cityName = cityName;
        this.stateName = stateName;
        this.zip = zip;
        this.line2 = line2;
        this.streetNumber = '';
        this.streetDirection = '';
        this.streetName = '';
        this.streetType = '';
        this.unitType = '';
        this.unitNumber = '';
        this.city = '';
        this.state = '';
        this.zipCode = '';
        this.secondLine = false;
        this.streetNumber = stNumber;
        this.streetDirection = stDirection;
        this.streetName = stName;
        this.streetType = stType;
        this.unitNumber = uNumber;
        this.unitType = uType;
        this.city = cityName;
        this.state = stateName;
        this.zipCode = zip;
        this.secondLine = line2;
    }
    Address.prototype.getAddressLine1 = function () {
        return this.streetNumber.concat(' ').concat(this.streetDirection).concat(' ').concat(this.streetName).concat(' ').concat(this.streetType);
    };
    Address.prototype.getAddressLine2 = function () {
        return this.unitType.concat(' ').concat(this.unitNumber);
    };
    Address.prototype.getAddressLine3 = function () {
        return this.city.concat(', ').concat(this.state).concat(', ').concat(this.zipCode);
    };
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=address.js.map