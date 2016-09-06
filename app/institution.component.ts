import { Component, OnInit } from '@angular/core';
import { Address } from './address';
import { AddressComponent } from './address.component';
import { Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
    selector: 'institution',
    templateUrl: '../app/institution.component.html',
    providers: [ AddressComponent ]
})
export class InstitutionComponent {
    institution: FormGroup;
    constructor(private _fb: FormBuilder, private addy: AddressComponent) { }
    ngOnInit() {
        this.institution = this._fb.group( {
            name: ['', Validators.required],
            department: ['', Validators.required],
            address: this.addy
        });
    }

}
