"use strict";
var address_1 = require("./address");
var Institution = (function () {
    function Institution() {
        this.name = '';
        this.department = '';
        this.address = new address_1.Address('', '', '', '', '', '', '', '', '', false);
    }
    return Institution;
}());
exports.Institution = Institution;
//# sourceMappingURL=institution.js.map