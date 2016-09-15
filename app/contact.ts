import { Email } from './email';
import { Phone } from './phone';

export class Contact {
  phoneNumbers: Phone[] = new Array(new Phone());
  emailAddresses: Email[] = new Array(new Email());
}
