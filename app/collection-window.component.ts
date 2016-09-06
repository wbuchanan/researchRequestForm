import {Component, OnInit, Input} from '@angular/core';
import { CollectionWindow } from './collection-window';
import { MeasuresComponent } from './measures.component';
import { ExistingDataComponent } from './existing-data.component';
import { ReactiveFormsModule, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'collection-window',
  templateUrl: '../app/collection-window.component.html'
})
export class CollectionWindowComponent implements OnInit {
  private theDatesRaw : Date[];

  @Input()
  measurement : MeasuresComponent;

  @Input()
  existing: ExistingDataComponent;

  public theDates : {};
  private collection: CollectionWindow[] = new Array(new CollectionWindow());

  dataCollection: FormGroup;
  constructor(private _fb: FormBuilder) {
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
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
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
