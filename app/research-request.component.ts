import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ResearchRequest }                                from "./research-request";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators }             from "@angular/forms";
import { PersonComponent }                                from "./person.component";
import { DistrictSponsor }                                from "./district-sponsor";
import { DistrictSponsorComponent }                       from "./district-sponsor.component";
import { SponsorComponent }                               from "./sponsor.component";
import { HypothesisComponent }                            from "./hypothesis.component";
import { Person }                                         from "./person";
import { Sponsor }                                        from "./sponsor";
import { Hypothesis }                                     from "./hypothesis";
import { Observable }                                     from "rxjs";
import { Headers, RequestOptions, Response, Http}         from "@angular/http";

@Component({
  selector: 'research-request',
  templateUrl: '../app/research-request.component.html'
})
export class ResearchRequestComponent implements OnInit {

  @Input() requestingPerson: PersonComponent;
  @Input() distSponsor: DistrictSponsorComponent;
  @Input() finSponsor: SponsorComponent;
  @Input() hypothesisArray: HypothesisComponent;
  @Output() theRequest: EventEmitter<ResearchRequest> = new EventEmitter<ResearchRequest>();

  private backendURL : string = 'localhost:9200/';

  private request: ResearchRequest = new ResearchRequest();
  researchRequest: FormGroup;

  constructor(private _fb: FormBuilder, private http: Http) { }

  ngOnInit() {
    this.researchRequest = this._fb.group( {
      requestor : this.requestingPerson,
      districtSponsor: this.distSponsor,
      projectTitle: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      problemStatement:  ['', [Validators.required, Validators.minLength(200), Validators.maxLength(10000)]],
      litReview:  ['', [Validators.required, Validators.minLength(200), Validators.maxLength(10000)]],
      sponsoredResearch: [false],
      financialSponsor: this.finSponsor,
      hypotheses: this.hypothesisArray,
      irbApproved: [false],
      irbConditionalOnFCPS: [false]
    });
  }

  bindPersonObject(person: Person) : void {
    this.request.requestor = person;
  }

  bindDistrictSponsor(distSponsor: DistrictSponsor) : void {
    this.request.districtSponsor = distSponsor;
  }

  bindFinancialSponsor(financeSponsor: Sponsor) : void {
    this.request.financialSponsor = financeSponsor;
  }

  bindHypotheses(hypotheses: Hypothesis[]) {
    this.request.hypotheses = hypotheses;
  }

  updateResearchRequest() : void {
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
