import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { People } from '../app/people';
import { Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
    selector: 'people',
    templateUrl: '../app/people.component.html'
})
export class PeopleComponent implements OnInit {

  @Output() peeps: EventEmitter<People> = new EventEmitter<People>();

  people: FormGroup;
  private person: People = new People();

  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
      this.people = this._fb.group( {
          firstName: ['', [Validators.required, Validators.minLength(2)]],
          lastName: ['', [Validators.required, Validators.minLength(2)]],
          jobTitle: ['', [Validators.required, Validators.minLength(2)]]
      });
  }

  getPerson(): People {
    return this.person;
  }

  update() : void {
    this.peeps.emit( this.getPerson() );
  }

}
