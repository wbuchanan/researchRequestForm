import {ExistingData} from "./existing-data";
import {Person} from "./person";
export class DataRequest {
  requestor: Person;
  existingReport: boolean = false;
  requestedData: ExistingData;
  researchQuestion: string;
  existingReportName: string = ' ';
}
