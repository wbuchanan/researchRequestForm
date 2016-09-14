import {Component, OnInit, Input, EventEmitter, OnChanges, Output, SimpleChange} from '@angular/core';
import { PeopleComponent } from './people.component';
import { ContactComponent } from './contact.component';
import { InstitutionComponent } from './institution.component';
import { Person } from './person';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Contact} from "./contact";
import {People} from "./people";
import {Institution} from "./institution";
import {Address} from "./address";

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
  private peep: Person = new Person();
  private defaultInst: Institution = new Institution();

  person: FormGroup;
  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.person = this._fb.group( {
      person : this.peeps,
      isFCPS: [true],
      contactInfo: this.contacts,
      institutionalAffiliation: this.inst
    });


  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {

    if (this.peep.isFCPS) {
      this.defaultInst.name = 'Fayette County Public Schools';
      this.defaultInst.department = 'IAAKS';
    } else {
      this.defaultInst.name = '';
      this.defaultInst.department = '';
    }
    this.updateRequestor();

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
