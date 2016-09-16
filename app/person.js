"use strict";
var contact_1 = require('./contact');
var institution_1 = require('./institution');
var people_1 = require('./people');
var Person = (function () {
    function Person() {
        this.person = new people_1.People();
        this.contactInfo = new contact_1.Contact();
        this.isFCPS = false;
        this.institutionalAffiliation = new institution_1.Institution();
    }
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map