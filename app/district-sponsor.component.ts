import {Component, OnInit, Input} from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {PeopleComponent} from "./people.component";
import {ContactComponent} from "./contact.component";
import {DistrictSponsor} from "./district-sponsor";

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

  levels = [ 'Senior Director', 'Director', 'Associate Director'];
  offices = [ 'Administrative Services', 'Operations', 'Curriculum, Instruction, & Assessment',
                      'School Leadership', 'Equity', 'Family & Community', 'Data, Research, & Evaluation' ];

  private distSponsor: DistrictSponsor = new DistrictSponsor();

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

  public getDistrictSponsor() : DistrictSponsor {
    return this.distSponsor;
  }

}
