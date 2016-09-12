import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Address } from './address';
import { AddressComponent } from './address.component';
import { Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {Institution} from "./institution";

@Component({
    selector: 'institution',
    templateUrl: '../app/institution.component.html'
})
export class InstitutionComponent {
  @Output() institutionData: EventEmitter<Institution> = new EventEmitter<Institution>();
  @Input() addy : AddressComponent;
  institution: FormGroup;
  inst: Institution = new Institution();
  public _fb: FormBuilder = new FormBuilder();
  constructor() {

  }

  ngOnInit() {
      this.institution = this._fb.group( {
          name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ,]{2,}')]],
          department: ['', [Validators.required, Validators.pattern('^[a-zA-Z ,]{4,}')]],
          address: this.addy
      });
  }

  enterAddress(addressObject) {
    this.inst.address = addressObject;
  }

  updateInstitution() : void {
    this.institutionData.emit( this.inst );
  }

  override(makeValid: boolean) {
    this.institution.
  }

}
