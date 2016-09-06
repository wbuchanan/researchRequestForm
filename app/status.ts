import { People } from './people';

export class Status {
  openedDate: Date;
  closedDate: Date;
  assignedTo: People;
  statusCategory: string;
  emailBody: string;
  internalNotes: string;
}
