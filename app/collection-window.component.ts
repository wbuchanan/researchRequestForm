///<reference path="date-range.validator.ts"/>
import { Component, OnInit, Input } from '@angular/core';
import { CollectionWindow } from './collection-window';
import { MeasuresComponent } from './measures.component';
import { ExistingDataComponent } from './existing-data.component';
import { ReactiveFormsModule, FormArray, FormBuilder, FormGroup, Validators, NG_VALIDATORS } from '@angular/forms';
import { checkDateRange } from './date-range.validator';



@Component({
  selector: 'collection-window',
  templateUrl: '../app/collection-window.component.html',
  providers: [ { provide: NG_VALIDATORS, useValue: checkDateRange, multi: false}]
})
export class CollectionWindowComponent implements OnInit {

  private theDatesRaw  = { start: new Date(Date.now()), end: new Date(Date.now()) } ;

  @Input()
  measurement : MeasuresComponent;

  @Input()
  existing: ExistingDataComponent;

  public theDates : {};
  private collection: CollectionWindow[] = new Array(new CollectionWindow());

  dataCollection: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.theDatesRaw.end.setFullYear(this.theDatesRaw.end.getFullYear() + 5);
    this.theDates = {
      "starting" : this.theDatesRaw.start.toISOString().substring(0, 10),
      "ending": this.theDatesRaw.end.toISOString().substring(0, 10),
      "placeHolder": (this.theDatesRaw.start.toISOString().substring(5,7)).concat('/')
        .concat(this.theDatesRaw.start.toISOString().substring(8, 10)).concat('/')
        .concat(this.theDatesRaw.start.toISOString().substring(0, 4))
    } ;
  }

  ngOnInit() {
    this.dataCollection = this._fb.group({
      collectionWindow: this._fb.array([ this.initCollectionWindowFields() ])
    });
  }


  initCollectionWindowFields() {
    return this._fb.group( {
      startDate: ['', [Validators.required, checkDateRange]],
      endDate: ['', [Validators.required, checkDateRange]],
      collectingData: [false],
      dataToCollect: this.measurement,
      needFcpsData: [false],
      fcpsData: this.existing
    } );
  }

  addCollectionWindowFields() {
    this.collection.push(new CollectionWindow());
    const control = <FormArray>this.dataCollection.controls['collectionWindow'];
    control.push(this.initCollectionWindowFields());
  }

  removeCollectionWindowFields(i: number) {
    this.collection.pop();
    const control = <FormArray>this.dataCollection.controls['collectionWindow'];
    control.removeAt(i);
  }

  getCollectionWindows() : CollectionWindow[] {
    return this.collection;
  }

}
