import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { PeopleComponent } from './people.component';
import { ContactComponent } from './contact.component';
import { InstitutionComponent } from './institution.component';
import { Person } from './person';
import { Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'person',
  templateUrl: '../app/person.component.html'
})
export class PersonComponent implements OnInit {

  @Input() peeps: PeopleComponent;
  @Input() contacts: ContactComponent;
  @Input() inst: InstitutionComponent;

  @Output() thePerson: EventEmitter<Person> = new EventEmitter<Person>();

  person: FormGroup;
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.person = this._fb.group( {
      person : this.peeps,
      isFCPS: [true],
      contactInfo: this.contacts,
      jobLocation: this.inst
    });
  }



}
