import { Component, OnInit } from '@angular/core';
import { ExistingData } from './existing-data';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'existing-data',
    templateUrl: '../app/existing-data.component.html'
})
export class ExistingDataComponent implements OnInit {
  existingData: FormGroup;
  private existing: ExistingData = new ExistingData();
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
      this.existingData = this._fb.group( {
        studentLevel: [''],
        classRoomLevel: [''],
        teacherLevel: [''],
        gradeLevel: [''],
        schoolLevel: [''],
        districtLevel: ['']
      });
  }

  public getExistingDataRequest() : ExistingData {
    return this.existing;
  }
}
