import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { People } from '../app/people';
import { Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
    selector: 'people',
    templateUrl: '../app/people.component.html'
})
export class PeopleComponent implements OnInit {
    people: FormGroup;
    person: People = new People();

    constructor(private _fb: FormBuilder) { }
    ngOnInit() {
        this.people = this._fb.group( {
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            jobTitle: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

}
