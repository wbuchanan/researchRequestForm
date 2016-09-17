import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DistrictSponsor } from "./district-sponsor";

@Component({
  selector: 'district-sponsor',
  templateUrl: '../app/district-sponsor.component.html'
})
export class DistrictSponsorComponent implements OnInit {

  @Output() sendDistrictSponsor: EventEmitter<DistrictSponsor> = new EventEmitter<DistrictSponsor>();
  private districtSponsor: FormGroup;
  private phoneTypes = [ "home", "mobile", "office", "fax" ];
  private emailTypes = [ "home", "work", "other" ];
  private levels = [ 'Senior Director', 'Director', 'Associate Director'];
  private offices = [ 'Administrative Services', 'Operations', 'Curriculum, Instruction, & Assessment',
                      'School Leadership', 'Equity', 'Family & Community', 'Data, Research, & Accountability' ];
  private helpDelegated: string = '';

  private distSponsor: DistrictSponsor = new DistrictSponsor();

  constructor(private _fb: FormBuilder) { }

  private displayHelpDelegate() : void {
    this.helpDelegated = 'Check this box if the district cosponsor is not a Senior Director or Director';
  }

  private undisplayHelpDelegate() : void {
    this.helpDelegated = '';
  }

  ngOnInit() {
    this.districtSponsor = this._fb.group( {
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      jobTitle: ['', [Validators.required, Validators.minLength(2)]],
      emailType: ['work', Validators.required],
      userName: ['', Validators.required],
      domain: ['fayette.kyschools.us', [Validators.required, Validators.pattern('^.*((\.com)|(\.net)|(\.us)|(\.gov)|(\.edu)|(\.org))$')]],
      phoneType: ['office', Validators.required],
      areaCode: ['859', [Validators.required, Validators.pattern('[0-9]{3}')]],
      exchangeCode: ['381', [Validators.required, Validators.pattern('[0-9]{3}')]],
      subscriberNumber: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
      office: ['', Validators.required],
      level: ['', Validators.required],
      delegated: [false, Validators.required]
    });
  }

  public makeUserName() : void {
    if (this.distSponsor.firstName === '') this.distSponsor.userName = '.';
    else this.distSponsor.userName = this.distSponsor.firstName.concat('.').concat(this.distSponsor.lastName);
  }

  public updateDistrictSponsor() : void {
    this.sendDistrictSponsor.emit( this.distSponsor );
  }

}
