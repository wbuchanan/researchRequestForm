import { People } from './people';
import { Institution } from "./institution";
import { Contact } from "./contact";

export class Sponsor {
  poc: People;
  contactInfo: Contact;
  institutionalAffiliation: Institution;
  fundingAmount: number;
  fundingDuration: number;
  fundingDurationUnits: string;
  projectStaffSize: number;
}
