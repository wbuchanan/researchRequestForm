/*
 * @title checkDateRange
 * @description Function used to test the validity of a date defined by date bounds.
 * @param fc The form control being tested
 * @param start The Starting date for the valid range.  This defaults to the current date/time.
 * @param end The Ending date for the valid range.  This defaults to 5 years after the current date/time.
 * @return An error object or a null value
 */
import { FormControl } from "@angular/forms";

export function checkDateRange(fc: FormControl, start?: Date, end?: Date) {

  let theDatesRaw = { start : new Date(Date.now()), end: new Date(Date.now())};
  theDatesRaw.start.setUTCHours(0,0,0,0);
  theDatesRaw.end.setFullYear(theDatesRaw.end.getFullYear() + 5);

  if (start === undefined) start = theDatesRaw.start;
  if (end === undefined) end = theDatesRaw.end;
  let formDate = new Date();

  // Sets a formDate value based on the value of the FormControl object
  if (fc.value !== undefined) {

    // Sets the year, month, and day fields
    formDate.setUTCFullYear(fc.value.substring(0, 4), fc.value.substring(6,7) - 1, fc.value.substring(9, 10));

    // Sets the hour, minute, second, and millisecond fields
    formDate.setUTCHours(0,0,0,0);

  } // End IF Block

  let err = {
    dateRangeError: {
      given: formDate,
      max: end,
      min: start
    }
  };

  return (formDate > end || formDate < start) ? err : null;
}
