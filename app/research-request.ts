import {Person} from "./person";
import {DistrictSponsor} from "./district-sponsor";
import {Sponsor} from "./sponsor";
import {Hypothesis} from "./hypothesis";
export class ResearchRequest {
  requestor: Person;
  districtSponsor: DistrictSponsor;
  projectTitle: string;
  problemStatement: string;
  litReview: string;
  sponsoredResearch: boolean;
  financialSponsor: Sponsor;
  hypotheses: Hypothesis[];
  irbApproved: boolean;
  irbConditionalOnFCPS: boolean;
  forDegree: boolean = false;
  degreeLevel: string;
  academicAdvisor: Person;
}
