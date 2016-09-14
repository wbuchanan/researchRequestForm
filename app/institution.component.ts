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
  institution: FormGroup;
  public inst: Institution = new Institution();
  defaultAddress: Address = new Address(' ', ' ', ' ', ' ', ' ', ' ', ' ', 'KY', ' ', false);

  constructor(public _fb: FormBuilder) {
  }

  ngOnInit() {
      this.institution = this._fb.group( {
          name: [this.externalInstitution.name || '', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ,]{2,}')]],
          department: [this.externalInstitution.department || '', [Validators.required, Validators.pattern('^[a-zA-Z ,]{4,}')]],
          address: this.addy
      });
    this.institution.controls['address'].valueChanges.subscribe((value) => {
      this.inst.address = value.address;
      this.updateInstitution();
    });
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (this.isEmployee) this.defaultAddress = new Address('701', 'E', 'Main', 'ST', '', '', 'Lexington', 'KY', '40502', false);
    else this.defaultAddress = new Address('', '', '', '', '', '', '', '', '', false);
    this.inst = this.externalInstitution;
    this.updateInstitution();
  }

  enterAddress(addressObject) {
    this.inst.address = addressObject;
  }

  updateInstitution() : void {
    this.institutionData.emit( this.inst );
  }


}
