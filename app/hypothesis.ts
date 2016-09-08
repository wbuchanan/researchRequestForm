import { CollectionWindow } from './collection-window';
import { StatisticalPower } from './statistical-power';

export class Hypothesis {
  researchQuestion: string;
  methodology: string;
  analysis: string;
  dataRequirements: CollectionWindow[];
  statisticalPower: StatisticalPower;
}
