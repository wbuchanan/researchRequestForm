import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Contact } from './contact';
import { PhoneComponent } from './phone.component';
import { EmailComponent } from './email.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Email} from "./email";
import {Phone} from "./phone";

@Component({
    selector: 'contactInformation',
    templateUrl: '../app/contact.component.html',
})
export class ContactComponent implements OnInit {

  @Input() email: EmailComponent;
  @Input() phone: PhoneComponent;
  @Output() contactInfo: EventEmitter<Contact> = new EventEmitter<Contact>();

  private contacts: Contact = new Contact();

  contactInformation: FormGroup;
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.contactInformation = this._fb.group( {
        emailAddresses: [this.email, Validators.required],
        phoneNumbers: [this.phone, Validators.required]
    });
  }

  emailAdded(email) {
    this.contacts.emailAddresses = email;
  }

  phoneAdded(phone) {
    this.contacts.phoneNumbers = phone;
  }

  public updateContactInfo() : void {
    this.contactInfo.emit( this.contacts );
  }

}
