import { Component, OnInit } from '@angular/core';
import { CollectionWindow } from './collection-window';
import { MeasuresComponent } from './measures.component';
import { ExistingDataComponent } from './existing-data.component';
import { ReactiveFormsModule, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'collection-window',
  templateUrl: '../app/collection-window.component.html',
  providers: [ MeasuresComponent, ExistingDataComponent ]
})
export class CollectionWindowComponent implements OnInit {
  private theDatesRaw : Date[];
  public theDates : {};

  dataCollection: FormGroup;
  constructor(private _fb: FormBuilder, private measurement: MeasuresComponent, private existing: ExistingDataComponent) {
    var currentDate = new Date(Date.now());
    this.theDatesRaw = [currentDate, currentDate];
    this.theDatesRaw[1].setFullYear(this.theDatesRaw[1].getFullYear() + 5);
    this.theDates = {
      "starting" : this.theDatesRaw[0].toISOString().substring(0, 10),
      "ending": this.theDatesRaw[1].toISOString().substring(0, 10),
      "placeHolder": (this.theDatesRaw[0].toISOString().substring(5,7)).concat('/')
        .concat(this.theDatesRaw[0].toISOString().substring(8, 10)).concat('/')
        .concat(this.theDatesRaw[0].toISOString().substring(0, 4))
    } ;
  }

  ngOnInit() {
    this.dataCollection = this._fb.group({
      collectionWindow: this._fb.array([ this.initCollectionWindowFields() ])
    });
  }


  initCollectionWindowFields() {
    return this._fb.group( {
      collectionId: [],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      collectingData: [false],
      dataToCollect: this.measurement,
      needFcpsData: [false],
      fcpsData: this.existing
    } );
  }

  addCollectionWindowFields() {
    const control = <FormArray>this.dataCollection.controls['collectionWindow'];
    control.push(this.initCollectionWindowFields());
  }

  removeCollectionWindowFields(i: number) {
    const control = <FormArray>this.dataCollection.controls['collectionWindow'];
    control.removeAt(i);
  }


  save(model: CollectionWindow) {
    console.log(model);
  }

}
