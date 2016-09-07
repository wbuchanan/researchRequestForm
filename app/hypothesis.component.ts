import {Component, OnInit, Input} from '@angular/core';
import { CollectionWindowComponent } from './collection-window.component';
import { ReactiveFormsModule, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StatisticalPowerComponent} from "./statistical-power.component";
import {Hypothesis} from "./hypothesis";

@Component({
  selector: 'hypothesis',
  templateUrl: '../app/hypothesis.component.html'
})
export class HypothesisComponent implements OnInit {
  private theDatesRaw : Date[];

  @Input()
  collection : CollectionWindowComponent;

  @Input()
  statPower: StatisticalPowerComponent;

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
      isQuantitative: [true, Validators.required],
      researchQuestion: ['', Validators.required],
      methodology: ['', Validators.required],
      statisticalModel: ['', Validators.required],
      dataToCollect: this.collection,
      power: this.statPower
    } );
  }

  addCollectionWindowFields() {
    this.myHypotheses.push(new Hypothesis());
    const control = <FormArray>this.hypotheses.controls['hypothesis'];
    control.push(this.initHypothesisFields());
  }

  removeCollectionWindowFields(i: number) {
    this.myHypotheses.pop();
    const control = <FormArray>this.hypotheses.controls['hypothesis'];
    control.removeAt(i);
  }

  getHypotheses() : Hypothesis[] {
    return this.myHypotheses;
  }

}
