import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators }             from "@angular/forms";
import { PersonComponent }                                from "./person.component";
import { Person }                                         from "./person";
import { Observable }                                     from "rxjs";
import { Headers, RequestOptions, Response, Http}         from "@angular/http";
import {DataRequest} from "./data-request";
import {ExistingDataComponent} from "./existing-data.component";
import {ExistingData} from "./existing-data";

@Component({
  selector: 'data-request',
  templateUrl: '../app/data-request.component.html'
})
export class DataRequestComponent implements OnInit {

  @Input() requestingPerson: PersonComponent;
  @Input() theData: ExistingDataComponent;
  @Output() theRequest: EventEmitter<DataRequest> = new EventEmitter<DataRequest>();

  private backendURL : string = 'localhost:9200/';

  private request: DataRequest = new DataRequest();
  dataRequest: FormGroup;

  constructor(private _fb: FormBuilder, private http: Http) { }

  ngOnInit() {
    this.dataRequest = this._fb.group( {
      requestor : this.requestingPerson,
      existingReport: [false],
      requestedData: this.theData,
      researchQuestion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      existingReportName: ['', Validators.required]
    });
  }

  bindPersonObject(person: Person) : void {
    this.request.requestor = person;
  }

  bindExistingData(existData: ExistingData) : void {
    this.request.requestedData = (existData || new ExistingData() );
  }

  updateDataRequest() : void {
    this.theRequest.emit( this.request );
  }

  submitted: boolean = false;

  submit() : void {
    this.submitted = true;
  }

  /*
   submit() : Observable<ResearchRequest> {
   let body = JSON.stringify(this.request);
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   return this.http.post(this.backendURL, body, options)
   .map(this.extractData)
   .catch(this.handleError);

   }

   private extractData(res: Response) {
   let body = res.json();
   return body.data || { };
   }

   private handleError (error: any) {
   // In a real world app, we might use a remote logging infrastructure
   // We'd also dig deeper into the error to get a better message
   let errMsg = (error.message) ? error.message :
   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
   console.error(errMsg); // log to console instead
   }

   */

}
