import {Component, Input} from '@angular/core';
import {ExistingDataComponent} from "./existing-data.component";
import {ContactComponent} from "./contact.component";
import {CollectionWindowComponent} from "./collection-window.component";
import {AddressComponent} from "./address.component";
import {MeasuresComponent} from "./measures.component";
import {DistrictSponsorComponent} from "./district-sponsor.component";
import {SponsorComponent} from "./sponsor.component";
import {PhoneComponent} from "./phone.component";
import {HypothesisComponent} from "./hypothesis.component";
import {StatusComponent} from "./status.component";
import {ResearchRequestComponent} from "./research-request.component";
import {DataRequestComponent} from "./data-request.component";
import {EmailComponent} from "./email.component";
import {Data} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: '../app/app.component.html'
})
export class AppComponent {

  @Input() measures: MeasuresComponent;
  @Input() existingData: ExistingDataComponent;
  @Input() addy : AddressComponent;
  @Input() contactInformation: ContactComponent;
  @Input() collectionWindow: CollectionWindowComponent;
  @Input() districtSponsor: DistrictSponsorComponent;
  @Input() financialSponsor: SponsorComponent;
  @Input() phone: PhoneComponent;
  @Input() hypoetheses: HypothesisComponent;
  @Input() statuses: StatusComponent;
  @Input() researchRequest: ResearchRequestComponent;
  @Input() dataRequest: DataRequestComponent;
  @Input() email: EmailComponent;

  constructor() { }

}
