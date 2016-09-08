import {Component, OnInit, Input, EventEmitter, Output, OnChanges} from '@angular/core';
import { Phone } from './phone';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
    selector: 'phone',
    templateUrl: '../app/phone.component.html'
})
export class PhoneComponent implements OnInit, OnChanges {

  @Input() phoneType: string;
  @Input() countryCode: string;
  @Input() areaCode: string;
  @Input() exchangeCode: string;
  @Input() subscriberNumber: string;
  @Input() extension: string;
  @Output() phoneAdded: EventEmitter<Phone[]> = new EventEmitter<Phone[]>();

  public phoneTypes = [ "home", "mobile", "office", "fax" ];
  phone: FormGroup;
  private phones : Phone[] = new Array(new Phone());

  constructor(private _fb: FormBuilder) {

  }

  ngOnChange() {

  }


  ngOnInit() {
    this.phone = this._fb.group( {
        phoneNumbers: this._fb.array([ this.initPhoneFields() ])
    });
  }


  initPhoneFields() {
    return this._fb.group({
                            phoneType: ['', Validators.required],
                            countryCode: ['001', Validators.required],
                            areaCode: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
                            exchangeCode: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
                            subscriberNumber: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
                            extension: ['']
             });
    }

  addPhoneFields() {
    this.phones.push(new Phone());
    const control = <FormArray>this.phone.controls['phoneNumbers'];
    control.push(this.initPhoneFields());
  }

  removePhoneFields(i: number) {
    this.phones.pop();
    const control = <FormArray>this.phone.controls['phoneNumbers'];
    control.removeAt(i);
  }

  public getPhoneNumbers() : Phone[] {
    return this.phones;
  }

  public update() : void {
    this.phoneAdded.emit( this.getPhoneNumbers() );
  }

}
