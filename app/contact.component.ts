import {Component, OnInit, Input} from '@angular/core';
import { Contact } from './contact';
import { PhoneComponent } from './phone.component';
import { EmailComponent } from './email.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Email} from "./email";
import {Phone} from "./phone";

@Component({
    selector: 'contactInformation',
    templateUrl: '../app/contact.component.html',
})
export class ContactComponent implements OnInit {

  @Input() email: EmailComponent;
  @Input() phone: PhoneComponent;
  @Input() emailAddresses: Email[];
  @Input() phoneNumbers: Phone[];

  contacts: Contact = new Contact();

  contactInformation: FormGroup;
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.contactInformation = this._fb.group( {
        emailAddresses: this.email,
        phoneNumbers: this.phone } );

    this.contactInformation.controls['emailAddresses'].valueChanges.subscribe(
      (form: any) => {
        let x = new Array(new Email());
        x = form;
        this.contacts.emailAddresses = x;
      }
    );

    this.contactInformation.controls['phoneNumbers'].valueChanges.subscribe(
      (form: Phone[]) => { this.contacts.phoneNumbers }
    );

  }

  emailAdded(email : Email[]) {
    this.contacts.emailAddresses = email;
  }

  phoneAdded(phone) {
    this.contacts.phoneNumbers = phone;
  }

  public getContacts() : Contact {
    return this.contacts;
  }

}
