import {Component, OnInit, Input} from '@angular/core';
import { Contact } from './contact';
import { PhoneComponent } from './phone.component';
import { EmailComponent } from './email.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'contactInformation',
    templateUrl: '../app/contact.component.html',
})
export class ContactComponent implements OnInit {

    @Input()
    email: EmailComponent;

    @Input()
    phone: PhoneComponent;

    contactInformation: FormGroup;
    constructor(private _fb: FormBuilder) { }
    ngOnInit() {
        this.contactInformation = this._fb.group( {
            emailAddresses: this.email,
            phoneNumbers: this.phone } )
    }

    save(model: Contact) {
        console.log(model);
    }

}
