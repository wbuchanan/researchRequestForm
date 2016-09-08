import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { PeopleComponent } from './people.component';
import { ContactComponent } from './contact.component';
import { InstitutionComponent } from './institution.component';
import { Address } from "./address";
import { Person } from './person';
import { Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {Sponsor} from "./sponsor";
import {People} from "./people";
import {Contact} from "./contact";
import {Institution} from "./institution";

@Component({
  selector: 'financial-sponsor',
  templateUrl: '../app/sponsor.component.html'
})
export class SponsorComponent implements OnInit {

  @Input() peeps: PeopleComponent;

  @Input() contacts: ContactComponent;

  @Input() inst: InstitutionComponent;

  @Output() financialSponsor : EventEmitter<Sponsor> = new EventEmitter<Sponsor>();

  private sponsorship : Sponsor = new Sponsor();

  public durUnits = [ "days", "weeks", "months", "years" ];
  sponsor: FormGroup;
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.sponsor = this._fb.group( {
      poc : this.peeps,
      contactInfo: this.contacts,
      institutionalAffiliation: this.inst,
      fundingAmount: [, Validators.required],
      fundingDuration: [, Validators.required],
      fundingDurationUnits: ['', Validators.required],
      projectStaffSize: []
    });
  }

  bindPersonObject(person: People) : void {
    this.sponsorship.poc = person;
  }

  bindContactInformation(contactInfo: Contact) : void {
    this.sponsorship.contactInfo = contactInfo;
  }

  bindInstitutionInformation(institution: Institution) : void {
    this.sponsorship.institutionalAffiliation = institution;
  }

  updateFinancialSponsor() : void {
    this.financialSponsor.emit( this.sponsorship );
  }


}
