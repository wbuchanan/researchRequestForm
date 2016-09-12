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
    this.helpInfo = ['For assistance computing statistical power, you can use', 'freely available software for statistical power computations.';
    this.gpowerLink = ['http://www.gpower.hhu.de/en.html', 'GPower*3'];
    this.helpClass = 'alert alert-warning';
  }

  public undisplayHelpInfo() : void {
    this.helpInfo = ['', ''];
    this.gpowerLink = ['', ''];
    this.helpClass = '';
  }

}

