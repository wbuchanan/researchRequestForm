"use strict";
var people_1 = require('./people');
var Status = (function () {
    function Status() {
        this.assignedTo = new people_1.People();
        this.statusCategory = 'Submitted';
        this.emailBody = 'Your submission was received.';
        this.internalNotes = 'Initial Submission.';
    }
    return Status;
}());
exports.Status = Status;
//# sourceMappingURL=status.js.map