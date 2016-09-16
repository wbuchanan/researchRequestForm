import { Contact } from './contact';
import { Institution } from './institution';
import { People } from './people';

export class Person {
  person : People = new People();
  contactInfo: Contact = new Contact();
  isFCPS: boolean = false;
  institutionalAffiliation: Institution = new Institution();
}
