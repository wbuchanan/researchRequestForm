import { Contact } from './contact';
import { Institution } from './institution';
import { People } from './people';

export class Person extends People {
  contactInfo: Contact;
  isFCPS: boolean;
  jobLocation: Institution;
}
