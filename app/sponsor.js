"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var person_1 = require('./person');
var Sponsor = (function (_super) {
    __extends(Sponsor, _super);
    function Sponsor() {
        _super.apply(this, arguments);
    }
    return Sponsor;
}(person_1.Person));
exports.Sponsor = Sponsor;
//# sourceMappingURL=sponsor.js.map