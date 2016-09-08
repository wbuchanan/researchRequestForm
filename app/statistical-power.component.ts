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
  statPower: FormGroup;
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

}

