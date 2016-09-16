"use strict";
/**
 * Created by billy on 8/30/16.
 */
var People = (function () {
    function People(_fn, _ln, _jt) {
        this._fn = _fn;
        this._ln = _ln;
        this._jt = _jt;
        this.firstName = '';
        this.lastName = '';
        this.jobTitle = '';
        this.firstName = _fn;
        this.lastName = _ln;
        this.jobTitle = _jt;
    }
    return People;
}());
exports.People = People;
//# sourceMappingURL=people.js.map