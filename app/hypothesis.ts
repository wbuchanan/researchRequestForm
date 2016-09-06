import { CollectionWindow } from './collection-window';
import { StatisticalPower } from './statistical-power';

export class Hypothesis {
  isQuantitative: boolean;
  researchQuestion: string;
  methodology: string;
  statisticalModel: string;
  dataToCollect: CollectionWindow[];
  power: StatisticalPower;
}
