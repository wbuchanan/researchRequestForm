import {Person} from "./person";
import {DistrictSponsor} from "./district-sponsor";
import {Sponsor} from "./sponsor";
import {Hypothesis} from "./hypothesis";
export class ResearchRequest {
  requestor: Person = new Person();
  districtSponsor: DistrictSponsor = new DistrictSponsor();
  projectTitle: string = '';
  problemStatement: string = '';
  litReview: string = '';
  sponsoredResearch: boolean = false;
  financialSponsor: Sponsor = new Sponsor();
  hypotheses: Hypothesis[] = new Array();
  irbApproved: boolean = false;
  irbConditionalOnFCPS: boolean = false;
  forDegree: boolean = false;
  degreeLevel: string = '';
  academicAdvisor: Person = new Person();
}
