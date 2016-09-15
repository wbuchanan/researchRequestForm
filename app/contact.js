"use strict";
var email_1 = require('./email');
var phone_1 = require('./phone');
var Contact = (function () {
    function Contact() {
        this.phoneNumbers = new Array(new phone_1.Phone());
        this.emailAddresses = new Array(new email_1.Email());
    }
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map