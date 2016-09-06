import { Component, OnInit } from '@angular/core';
import { StatisticalPower } from './statistical-power';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'statistical-power',
    templateUrl: '../app/statistical-power.component.html'
})
export class StatisticalPowerComponent implements OnInit {
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

  public getPower() : StatisticalPower {
    return this.power;
  }

}

