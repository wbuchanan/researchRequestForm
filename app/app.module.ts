/**
 * Created by billy on 8/31/16.
 */

import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { AppComponent }                 from './app.component';
import { MeasuresComponent }            from './measures.component';
import { AddressComponent }             from './address.component';
import { CollectionWindowComponent }    from './collection-window.component';
import { ContactComponent }             from './contact.component';
import { ExistingDataComponent }        from './existing-data.component';
import { PhoneComponent }               from "./phone.component";
import { EmailComponent }               from "./email.component";
import { DistrictSponsorComponent }     from "./district-sponsor.component";
import { SponsorComponent }             from "./sponsor.component";
import { PeopleComponent }              from "./people.component";
import { StatisticalPowerComponent }    from "./statistical-power.component";
import { PersonComponent }              from "./person.component";
import { InstitutionComponent }         from "./institution.component";


@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, MeasuresComponent, AddressComponent, CollectionWindowComponent, ContactComponent,
                  ExistingDataComponent, PhoneComponent, EmailComponent, DistrictSponsorComponent,
                  SponsorComponent, InstitutionComponent, PersonComponent, PeopleComponent, StatisticalPowerComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
