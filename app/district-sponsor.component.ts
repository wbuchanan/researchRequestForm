import {Component, OnInit, Input} from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {PeopleComponent} from "./people.component";
import {ContactComponent} from "./contact.component";

@Component({
  selector: 'district-sponsor',
  templateUrl: '../app/district-sponsor.component.html'
})
export class DistrictSponsorComponent implements OnInit {

  @Input()
  peeps: PeopleComponent;

  @Input()
  contactInformation: ContactComponent;

  districtSponsor: FormGroup;

  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.districtSponsor = this._fb.group( {
      person : this.peeps,
      contactInformation: this.contactInformation,
      office: ['', Validators.required],
      level: ['', Validators.required],
      delegated: [false, Validators.required]
    });
  }

}
