"use strict";
var Address = (function () {
    function Address(streetNumber, streetDirection, streetName, streetType, unitType, unitNumber, city, state, zipCode, secondLine) {
        this.streetNumber = streetNumber;
        this.streetDirection = streetDirection;
        this.streetName = streetName;
        this.streetType = streetType;
        this.unitType = unitType;
        this.unitNumber = unitNumber;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.secondLine = secondLine;
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