"use strict";
function checkDateRange(fc) {
    // Defines object storing the current date that will be modified to create start and end dates.
    var theDatesRaw = { start: new Date(Date.now()), end: new Date(Date.now()) };
    // Sets the time to midnight
    theDatesRaw.start.setHours(0, 0, 0, 0);
    // Sets the end date to five years in the future
    theDatesRaw.end.setFullYear(theDatesRaw.end.getFullYear() + 5);
    // Create a new Date object
    var formDate = new Date();
    // Sets a formDate value based on the value of the FormControl object
    if (fc.value !== undefined) {
        // Sets the year, month, and day fields
        formDate.setFullYear(fc.value.substring(0, 4), fc.value.substring(5, 7) - 1, fc.value.substring(8, 10));
        // Sets the hour, minute, second, and millisecond fields
        formDate.setHours(0, 0, 0, 0);
    } // End IF Block
    // Defines an error object that will be returned if there is an invalid date selected
    var err = {
        // Defines the object containing all necessary data for the validation
        dateRangeError: {
            // Date submitted by the end user
            given: formDate,
            // End date defined by current date plus five years
            max: theDatesRaw.end,
            // Start date defined as the current day at midnight
            min: theDatesRaw.start
        } // Ends definition of dateRangeError object
    }; // Ends definition of the err object.
    // Tests if the date provided by the end user is greater than the end date or less than the start date.
    return (formDate > theDatesRaw.end || formDate < theDatesRaw.start) ? err : null;
}
exports.checkDateRange = checkDateRange; // Ends definition of the function
//# sourceMappingURL=date-range.validator.js.map