import {Component, OnInit, Input} from '@angular/core';
import { Address } from '../app/address';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SECONDARY_UNITS } from '../app/secondary-units';
import { STREET_TYPES } from '../app/street-type-abbreviations';

@Component({
    selector: 'address',
    templateUrl: '../app/address.component.html'
})
export class AddressComponent implements OnInit {

  @Input() streetNumber: string;
  @Input() streetDirection: string;
  @Input() streetName: string;
  @Input() streetType: string;
  @Input() unitType: string;
  @Input() unitNumber: string;
  @Input() city: string;
  @Input() state: string;
  @Input() zipCode: string;
  @Input() secondLine: boolean;


    public directions = [ '', 'N', 'S', 'E', 'W', 'NE', 'NW', 'SE', 'SW'];
    public secUnits = SECONDARY_UNITS;
    public streetTypes = STREET_TYPES;
    public cszips = [ { "statenm": "ALABAMA", "stusps" : "AL"},
        { "statenm": "ALASKA", "stusps" : "AK"},
        { "statenm": "ARIZONA", "stusps" : "AZ"},
        { "statenm": "ARKANSAS", "stusps" : "AR"},
        { "statenm": "CALIFORNIA", "stusps" : "CA"},
        { "statenm": "COLORADO", "stusps" : "CO"},
        { "statenm": "CONNECTICUT", "stusps" : "CT"},
        { "statenm": "DELAWARE", "stusps" : "DE"},
        { "statenm": "FLORIDA", "stusps" : "FL"},
        { "statenm": "GEORGIA", "stusps" : "GA"},
        { "statenm": "HAWAII", "stusps" : "HI"},
        { "statenm": "IDAHO", "stusps" : "ID"},
        { "statenm": "ILLINOIS", "stusps" : "IL"},
        { "statenm": "INDIANA", "stusps" : "IN"},
        { "statenm": "IOWA", "stusps" : "IA"},
        { "statenm": "KANSAS", "stusps" : "KS"},
        { "statenm": "KENTUCKY", "stusps" : "KY"},
        { "statenm": "LOUISIANA", "stusps" : "LA"},
        { "statenm": "MAINE", "stusps" : "ME"},
        { "statenm": "MARYLAND", "stusps" : "MD"},
        { "statenm": "MASSACHUSETTS", "stusps" : "MA"},
        { "statenm": "MICHIGAN", "stusps" : "MI"},
        { "statenm": "MINNESOTA", "stusps" : "MN"},
        { "statenm": "MISSISSIPPI", "stusps" : "MS"},
        { "statenm": "MISSOURI", "stusps" : "MO"},
        { "statenm": "MONTANA", "stusps" : "MT"},
        { "statenm": "NEBRASKA", "stusps" : "NE"},
        { "statenm": "NEVADA", "stusps" : "NV"},
        { "statenm": "NEW HAMPSHIRE", "stusps" : "NH"},
        { "statenm": "NEW JERSEY", "stusps" : "NJ"},
        { "statenm": "NEW MEXICO", "stusps" : "NM"},
        { "statenm": "NEW YORK", "stusps" : "NY"},
        { "statenm": "NORTH CAROLINA", "stusps" : "NC"},
        { "statenm": "NORTH DAKOTA", "stusps" : "ND"},
        { "statenm": "OHIO", "stusps" : "OH"},
        { "statenm": "OKLAHOMA", "stusps" : "OK"},
        { "statenm": "OREGON", "stusps" : "OR"},
        { "statenm": "PENNSYLVANIA", "stusps" : "PA"},
        { "statenm": "RHODE ISLAND", "stusps" : "RI"},
        { "statenm": "SOUTH CAROLINA", "stusps" : "SC"},
        { "statenm": "SOUTH DAKOTA", "stusps" : "SD"},
        { "statenm": "TENNESSEE", "stusps" : "TN"},
        { "statenm": "TEXAS", "stusps" : "TX"},
        { "statenm": "UTAH", "stusps" : "UT"},
        { "statenm": "VERMONT", "stusps" : "VT"},
        { "statenm": "VIRGINIA", "stusps" : "VA"},
        { "statenm": "WASHINGTON", "stusps" : "WA"},
        { "statenm": "WEST VIRGINIA", "stusps" : "WV"},
        { "statenm": "WISCONSIN", "stusps" : "WI"},
        { "statenm": "WYOMING", "stusps" : "WY"} ];
    physicalAddress: FormGroup;
  private addy: Address;
  constructor(private _fb: FormBuilder) {
    this.addy = new Address();
  }
  ngOnInit() {
      this.physicalAddress = this._fb.group( {
          streetNumber: ['', Validators.pattern('[^\\s]')],
          streetDirection: [''],
          streetName: [''],
          streetType: [''],
          secondLine: [false],
          unitType: [''],
          unitNumber: [''],
          city: ['', Validators.required],
          state: ['', Validators.required],
          zipCode: ['', [Validators.required, Validators.pattern('(([0-9]{5})|([0-9]{5}-[0-9]{4}))')]]
      });
  }

  public getAddress() : Address {
    return this.addy;
  }

}