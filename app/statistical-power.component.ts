import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { StatisticalPower } from './statistical-power';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'statistical-power',
    templateUrl: '../app/statistical-power.component.html'
})
export class StatisticalPowerComponent implements OnInit {

  // Emits the Statistical Power object
  @Output() superPowers : EventEmitter<StatisticalPower> = new EventEmitter<StatisticalPower>();

  private power: StatisticalPower = new StatisticalPower();
  private helpInfo: string[] = ['', ''];
  private gpowerLink: string[] = ['', ''];
  statPower: FormGroup;
  private helpClass: string = '';
  private alphaInfo: string = '';
  private betaInfo: string = '';
  private testInfo: string = '';
  private sampleInfo: string = '';
  private mdesInfo: string = '';

  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
      this.statPower = this._fb.group( {
          alpha: [, Validators.required],
          beta: [, Validators.required],
          statistic: ['', Validators.required],
          totalSampleSize: [, Validators.required],
          minimalDetectableEffect: [, Validators.required]
      });
  }

  public updateStatisticalPower() : void {
    this.superPowers.emit( this.power );
  }

  public displayHelpInfo() : void {
    this.helpInfo = ['For assistance computing statistical power, you can use', 'freely available software for statistical power computations.'];
    this.gpowerLink = ['http://www.gpower.hhu.de/en.html', 'GPower*3'];
    this.helpClass = 'alert alert-warning';
  }

  public undisplayHelpInfo() : void {
    this.helpInfo = ['', ''];
    this.gpowerLink = ['', ''];
    this.helpClass = '';
  }

  public displayAlphaInfo() : void {
    this.alphaInfo = 'The alpha parameter defines the probability of a Type I error that is acceptable to the researcher; this is typically set to 0.05.  A Type I error is analogous to a false positive - a result that would suggest an effect exists when it does not truly exist.';
  }

  public undisplayAlphaInfo() : void {
    this.alphaInfo = '';
  }

  public displayBetaInfo() : void {
    this.betaInfo = 'The beta parameter defines the probability of a Type II error that is acceptable to the researcher; this is typically set to 0.20.  A Type II error is analogous to a false negative - a result that would suggest that no effect was observed when there was an effect.';
  }

  public undisplayBetaInfo() : void {
    this.betaInfo = '';
  }

  public displayTestInfo() : void {
    this.testInfo = 'This should be the type of statistical test used to test the hypothesis.  For example, if using a regression model, this would typically be a t-statistic, z-statistic, or Wald test; for ANOVA an F statistic; and for a test of how well an SEM fits the data a X^2 statistic.';
  }

  public undisplayTestInfo() : void {
    this.testInfo = '';

  }

  public displaySampleInfo() : void {
    this.sampleInfo = 'This is the total number of units of analysis that will be included in your study.  For student-level data, this would be the number of students.';
  }

  public undisplaySampleInfo() : void {
    this.sampleInfo = '';
  }

  public displayMDESInfo() : void {
    this.mdesInfo = 'The minimal detectable effect size is a function of sample size, test statistic, alpha, and beta levels.  This is the smallest size effect the study could potentially detect given these conditions.  In small samples, this will typically be very large and means you should include the appropriate caveats to explain what failing to reject the null hypothesis actually implies under those conditions.';
  }

  public undisplayMDESInfo() : void {
    this.mdesInfo = '';
  }




}

