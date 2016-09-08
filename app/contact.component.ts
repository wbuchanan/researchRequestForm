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

  private contacts: Contact = new Contact();

  contactInformation: FormGroup;
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.contactInformation = this._fb.group( {
        emailAddresses: this.email,
        phoneNumbers: this.phone } );
  }

  emailAdded(email) {
    this.contacts.emailAddresses = email;
  }

  phoneAdded(phone) {
    this.contacts.phoneNumbers = phone;
  }

  public getContacts() : Contact {
    return this.contacts;
  }

}
