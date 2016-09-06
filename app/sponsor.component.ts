import {Component, OnInit, Input} from '@angular/core';
import { PeopleComponent } from './people.component';
import { ContactComponent } from './contact.component';
import { InstitutionComponent } from './institution.component';
import { Address } from "./address";
import { Person } from './person';
import { Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'financial-sponsor',
  templateUrl: '../app/sponsor.component.html'
})
export class SponsorComponent implements OnInit {

  @Input()
  peeps: PeopleComponent;

  @Input()
  contacts: ContactComponent;

  @Input()
  inst: InstitutionComponent;

  public durUnits = [ "days", "weeks", "months", "years" ];
  sponsor: FormGroup;
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.sponsor = this._fb.group( {
      person : this.peeps,
      contactInfo: this.contacts,
      jobLocation: this.inst,
      fundingAmount: [, Validators.required],
      fundingDuration: [, Validators.required],
      fundingDurationUnits: ['', Validators.required],
      projectStaffSize: []
    });
  }

}
