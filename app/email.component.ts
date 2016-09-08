import {Component, OnInit, Input, EventEmitter, Output, OnChanges} from '@angular/core';
import { Email } from './email';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'email',
    templateUrl: '../app/email.component.html'
})
export class EmailComponent implements OnInit, OnChanges {

  @Output() emailAdded: EventEmitter<Email[]> = new EventEmitter<Email[]>();

  public emailTypes = [ "home", "work", "other" ];
  email: FormGroup;
  private emails: Email[] = new Array(new Email());

  constructor(private _fb: FormBuilder) {

  }

  ngOnChange() {

  }

  ngOnInit() {
      this.email = this._fb.group( {
          emailAddresses: this._fb.array([ this.initEmailFields() ])
      });
  }

  initEmailFields() {
      return this._fb.group({
          emailType: ['', Validators.required],
          userName: ['', Validators.required],
          domain: ['', [Validators.required, Validators.pattern('^.*((\.com)|(\.net)|(\.us)|(\.gov)|(\.edu)|(\.org))$')]]
      });
  }

  addEmailFields() {
    this.emails.push(new Email());
    const control = <FormArray>this.email.controls['emailAddresses'];
    control.push(this.initEmailFields());
  }

  removeEmailFields(i: number) {
    this.emails.pop();
    const control = <FormArray>this.email.controls['emailAddresses'];
    control.removeAt(i);
  }

  public getEmailAddresses() : Email[] {
    return this.emails;
  }

  public update() : void {
    this.emailAdded.emit( this.getEmailAddresses() );
  }


}
