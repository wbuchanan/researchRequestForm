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

  @Input() collection : CollectionWindowComponent;
  @Input() statPower: StatisticalPowerComponent;
  @Output() hypothesisEmitter: EventEmitter<Hypothesis[]> = new EventEmitter<Hypothesis[]>();
  private theDatesRaw : Date[];
  private methods = ["Quantitative", "Qualitative", "Mixed Methods"];
  private myHypotheses: Hypothesis[] = new Array(new Hypothesis());
  private helpResearchQuestion: string = '';
  private helpMethodology: string = '';
  private helpAnalysis: string = '';
  private hypotheses: FormGroup;

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
      dataRequirements: [this.collection],
      statisticalPower: [this.statPower]
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

  private displayHelpResearchQuestion() : void {
    this.helpResearchQuestion = 'This should be a testable hypothesis in the form of a question.  For example, do 8th grade females score higher than males on the KPREP Science assessment after participating in program x?';
  }

  private undisplayHelpResearchQuestion() : void {
    this.helpResearchQuestion = '';
  }

  private displayHelpMethodology() : void {
    this.helpMethodology = 'If your research is purely qualitative (e.g., ethnography, phenomenological research, etc...) select this option.  For any research involving quantitative analysis you will also be asked to supply information about the minimal detectable effect size of your study; there is also a link to free software that can assist you in estimating statistical power/minimally detectable effect sizes.';
  }

  private undisplayHelpMethodology() : void {
    this.helpMethodology = '';
  }

  private displayHelpAnalysis() : void {
    this.helpAnalysis = 'Use this field to provide a detailed description of how you plan to analyze the data.  If your research implies causal relationships in any way, you must include information about how your methods address selection bias/endogeneity issues and/or any other violations of model assumptions that would compromise causal inferences.';
  }

  private undisplayHelpAnalysis() : void {
    this.helpAnalysis = '';
  }

}
