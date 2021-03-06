import {Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChange} from '@angular/core';
import { Address } from './address';
import { AddressComponent } from './address.component';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {Institution} from "./institution";

@Component({
    selector: 'institution',
    templateUrl: '../app/institution.component.html'
})
export class InstitutionComponent {
  @Output() institutionData: EventEmitter<Institution> = new EventEmitter<Institution>();
  @Input() addy : AddressComponent;
  @Input() isEmployee: boolean;
  @Input() externalInstitution: Institution;
  private institution: FormGroup;
  private inst: Institution;
  private defaultAddress: Address = new Address(' ', ' ', ' ', ' ', ' ', ' ', ' ', 'KY', ' ', false);

  constructor(public _fb: FormBuilder) {
    this.inst = this.externalInstitution !== undefined ? this.externalInstitution : new Institution();
  }

  ngOnInit() {
      this.institution = this._fb.group( {
          name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ,]{2,}')]],
          department: ['', [Validators.required, Validators.pattern('^[a-zA-Z ,]{4,}')]],
          address: [this.addy]
      });
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.inst = this.externalInstitution;
    this.defaultAddress = this.externalInstitution.address;
    this.updateInstitution();
  }

  enterAddress(addressObject) {
    this.inst.address = addressObject;
  }

  updateInstitution() : void {
    this.institutionData.emit( this.inst );
  }

}
