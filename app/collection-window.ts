import { ExistingData } from './existing-data';
import { Measures } from './measures';

export class CollectionWindow {
  startDate: Date;
  endDate: Date;
  collectingData: boolean = false;
  dataToCollect: Measures[] = [];
  needFcpsData: boolean = false;
  fcpsData: ExistingData;
}
