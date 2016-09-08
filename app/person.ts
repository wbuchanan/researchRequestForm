import { Contact } from './contact';
import { Institution } from './institution';
import { People } from './people';

export class Person {
  person : People;
  contactInfo: Contact;
  isFCPS: boolean;
  institutionalAffiliation: Institution;
}
