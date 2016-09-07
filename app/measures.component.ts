import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Measures } from './measures';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { UNIT_OF_MEASUREMENT } from './unitsOfMeasurement';

@Component({
  selector: 'measures',
  templateUrl: '../app/measures.component.html'
})
export class MeasuresComponent implements OnInit {

  timeUnits = [ "seconds", "minutes", "hours", "class periods", "days"];
  measures: FormGroup;
  units = UNIT_OF_MEASUREMENT;
  private measurement: Measures[] = new Array(new Measures());
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.measures = this._fb.group( {
      measure: this._fb.array([ this.initMeasureFields() ])
    });
  }

  initMeasureFields() {
    return this._fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{2,}.*')]],
      unitOfMeasurement: ['', Validators.required],
      references: [''],
      pilot: [false, Validators.required],
      administrationTime: [10, Validators.required],
      administrationTimeUnits: ['minutes', Validators.required]
    });
  }

  addMeasureFields() {
    this.measurement.push(new Measures());
    const control = <FormArray>this.measures.controls['measure'];
    control.push(this.initMeasureFields());
  }

  removeMeasureFields(i: number) {
    this.measurement.pop();
    const control = <FormArray>this.measures.controls['measure'];
    control.removeAt(i);
  }

  public getMeasurementTools() : Measures[] {
    return this.measurement;
  }

}
