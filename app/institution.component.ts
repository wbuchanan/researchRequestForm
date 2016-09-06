import { Component, OnInit } from '@angular/core';
import { Address } from './address';
import { AddressComponent } from './address.component';
import { Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {Institution} from "./institution";

@Component({
    selector: 'institution',
    templateUrl: '../app/institution.component.html'
})
export class InstitutionComponent {
    institution: FormGroup;
    private addy: AddressComponent;
    private inst: Institution = new Institution();

    constructor(private _fb: FormBuilder) { }
    ngOnInit() {
        this.institution = this._fb.group( {
            name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+')]],
            department: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+')]],
            address: this.addy
        });
    }

    getInstitution() : Institution {
      return this.inst;
    }

}
