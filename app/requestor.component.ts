import {Component, OnInit, Input} from '@angular/core';
import { PersonComponent } from './person.component';
import { Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'requestor',
    templateUrl: 'requestor.component.html'
})
export class RequestorComponent implements OnInit {
    @Input() theRequestor: PersonComponent;
    requestedBy: FormGroup;
    constructor(private _fb: FormBuilder) { }
    ngOnInit() {
        this.requestedBy = this._fb.group( this.theRequestor );
    }

}
