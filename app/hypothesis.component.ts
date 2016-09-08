import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CollectionWindowComponent } from './collection-window.component';
import { ReactiveFormsModule, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StatisticalPowerComponent} from "./statistical-power.component";
import {Hypothesis} from "./hypothesis";
import {StatisticalPower} from "./statistical-power";
import {CollectionWindow} from "./collection-window";

@Component({
  selector: 'hypothesis',
  templateUrl: '../app/hypothesis.component.html'
})
export class HypothesisComponent implements OnInit {
  private theDatesRaw : Date[];

  private methods = ["Quantitative", "Qualitative", "Mixed Methods"];

  @Input() collection : CollectionWindowComponent;
  @Input() statPower: StatisticalPowerComponent;
  @Output() hypothesisEmitter: EventEmitter<Hypothesis[]> = new EventEmitter<Hypothesis[]>();

  private myHypotheses: Hypothesis[] = new Array(new Hypothesis());

  hypotheses: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.hypotheses = this._fb.group({
      hypothesis: this._fb.array([ this.initHypothesisFields() ])
    });
  }

  initHypothesisFields() {
    return this._fb.group( {
      researchQuestion: ['', Validators.required],
      methodology: ['', Validators.required],
      analysis: ['', Validators.required],
      dataRequirements: this.collection,
      statisticalPower: this.statPower
    } );
  }

  addHypothesisFields() {
    this.myHypotheses.push(new Hypothesis());
    const control = <FormArray>this.hypotheses.controls['hypothesis'];
    control.push(this.initHypothesisFields());
  }

  removeHypothesisFields(i: number) {
    this.myHypotheses.pop();
    const control = <FormArray>this.hypotheses.controls['hypothesis'];
    control.removeAt(i);
  }

  bindCollectionWindows(i: number, window: CollectionWindow[]) {
    this.myHypotheses[i].dataRequirements = window;
  }

  bindStatisticalPower(i: number, power: StatisticalPower) {
    this.myHypotheses[i].statisticalPower = power;
  }

  updateHypotheses() : void {
    this.hypothesisEmitter.emit( this.myHypotheses );
  }

}
