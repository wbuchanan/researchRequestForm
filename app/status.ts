import { People } from './people';

export class Status {
  openedDate: Date;
  closedDate: Date;
  assignedTo: People = new People();
  statusCategory: string = 'Submitted';
  emailBody: string = 'Your submission was received.';
  internalNotes: string = 'Initial Submission.';

}
