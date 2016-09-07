"use strict";
function checkDateRange(fc, start, end) {
    var theDatesRaw = { start: new Date(Date.now()), end: new Date(Date.now()) };
    theDatesRaw.start.setUTCHours(0, 0, 0, 0);
    theDatesRaw.end.setFullYear(theDatesRaw.end.getFullYear() + 5);
    if (start === undefined)
        start = theDatesRaw.start;
    if (end === undefined)
        end = theDatesRaw.end;
    var formDate = new Date();
    // Sets a formDate value based on the value of the FormControl object
    if (fc.value !== undefined) {
        // Sets the year, month, and day fields
        formDate.setUTCFullYear(fc.value.substring(0, 4), fc.value.substring(6, 7) - 1, fc.value.substring(9, 10));
        // Sets the hour, minute, second, and millisecond fields
        formDate.setUTCHours(0, 0, 0, 0);
    } // End IF Block
    var err = {
        dateRangeError: {
            given: formDate,
            max: end,
            min: start
        }
    };
    return (formDate > end || formDate < start) ? err : null;
}
exports.checkDateRange = checkDateRange;
//# sourceMappingURL=date-range.validator.js.map