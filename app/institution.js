"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var address_1 = require('./address');
var Institution = (function (_super) {
    __extends(Institution, _super);
    function Institution() {
        _super.apply(this, arguments);
    }
    return Institution;
}(address_1.Address));
exports.Institution = Institution;
//# sourceMappingURL=institution.js.map