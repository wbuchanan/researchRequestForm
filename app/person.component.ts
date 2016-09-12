import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { PeopleComponent } from './people.component';
import { ContactComponent } from './contact.component';
import { InstitutionComponent } from './institution.component';
import { Person } from './person';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Contact} from "./contact";
import {People} from "./people";
import {Institution} from "./institution";

@Component({
  selector: 'person',
  templateUrl: '../app/person.component.html'
})
export class PersonComponent implements OnInit {

  @Input() peeps: PeopleComponent;
  @Input() contacts: ContactComponent;
  @Input() inst: InstitutionComponent;
  @Input() title: string;

  @Output() requestor: EventEmitter<Person> = new EventEmitter<Person>();
  private componentTitle: string = this.title;
  private peep: Person = new Person();
  public _fb: FormBuilder = new FormBuilder();
  person: FormGroup;
  constructor() {
  }

  ngOnInit() {
    this.person = this._fb.group( {
      person : this.peeps,
      isFCPS: [true],
      contactInfo: this.contacts,
      institutionalAffiliation: this.inst
    });
  }

  bindPersonObject(person: People) : void {
    this.peep.person = person;
  }

  bindContactInformation(contactInfo: Contact) : void {
    this.peep.contactInfo = contactInfo;
  }

  bindInstitutionInformation(institution: Institution) : void {
    this.peep.institutionalAffiliation = institution;
  }

  updateRequestor() : void {
    this.requestor.emit( this.peep );
  }

}
