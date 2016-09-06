import { Person } from './person';

export class Sponsor extends Person {
  fundingAmount: number;
  fundingDuration: number;
  fundingDurationUnits: string;
  projectStaffSize: number;
}
