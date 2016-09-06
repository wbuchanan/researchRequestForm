"use strict";
var Address = (function () {
    function Address() {
        this.streetNumber = "";
        this.streetDirection = "";
        this.streetName = "";
        this.streetType = "";
        this.unitType = "";
        this.unitNumber = "";
        this.city = "";
        this.state = "";
        this.zipCode = "";
        this.secondLine = false;
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