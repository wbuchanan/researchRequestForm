"use strict";
function checkDateRange(fc) {
    var theDatesRaw = { start: new Date(Date.now()), end: new Date(Date.now()) };
    theDatesRaw.start.setHours(0, 0, 0, 0);
    theDatesRaw.end.setFullYear(theDatesRaw.end.getFullYear() + 5);
    var formDate = new Date();
    // Sets a formDate value based on the value of the FormControl object
    if (fc.value !== undefined) {
        // Sets the year, month, and day fields
        formDate.setFullYear(fc.value.substring(0, 4), fc.value.substring(5, 7) - 1, fc.value.substring(8, 10));
        // Sets the hour, minute, second, and millisecond fields
        formDate.setHours(0, 0, 0, 0);
    } // End IF Block
    var err = {
        dateRangeError: {
            given: formDate,
            max: theDatesRaw.end,
            min: theDatesRaw.start
        }
    };
    console.log(formDate);
    console.log(theDatesRaw.start);
    console.log(theDatesRaw.end);
    return (formDate > theDatesRaw.end || formDate < theDatesRaw.start) ? err : null;
}
exports.checkDateRange = checkDateRange;
//# sourceMappingURL=date-range.validator.js.map