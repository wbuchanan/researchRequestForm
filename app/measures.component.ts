import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Measures } from './measures';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { UNIT_OF_MEASUREMENT } from './unitsOfMeasurement';

@Component({
  selector: 'measures',
  templateUrl: '../app/measures.component.html'
})
export class MeasuresComponent implements OnInit {

  @Output() addMeasures : EventEmitter<Measures[]> = new EventEmitter<Measures[]>();
  private timeUnits = [ "seconds", "minutes", "hours", "class periods", "days"];
  private measures: FormGroup;
  private units = UNIT_OF_MEASUREMENT;
  private measurement: Measures[] = new Array(new Measures());
  private helpName: string = '';
  private helpUnitOffMeasurement: string = '';
  private helpReferences: string = '';
  private helpPilot: string = '';

  constructor(private _fb: FormBuilder) { }

  displayHelpName() : void {
    this.helpName = 'This should be the name of the measurement tool that you plan to use to collect data.';
  }

  undisplayHelpName() : void {
    this.helpName = '';
  }

  displayHelpUnitOfMeasurement() : void {
    this.helpUnitOffMeasurement = 'This would identify the unit at which the measurement tool is being used.  For example, an educator observation tool should list the teacher level, while an IQ test would be a student level measure.';
  }

  undisplayHelpUnitOfMeasurement() : void {
    this.helpUnitOffMeasurement = '';
  }

  displayHelpReference(): void {
    this.helpReferences = 'This should include the references to the literature related to the validity/reliability of the measurement instrument.';
  }

  undisplayHelpReference(): void {
    this.helpReferences = '';
  }

  displayHelpPilot() : void {
    this.helpPilot = 'Check this box if the measurement tool is being used for the first time in this research project';
  }

  undisplayHelpPilot() : void {
    this.helpPilot = '';
  }

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

  public updateMeasures() : void {
    this.addMeasures.emit( this.measurement );
  }

}
