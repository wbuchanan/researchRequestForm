import { ExistingData } from './existing-data';
import { Measures } from './measures';

export class CollectionWindow {
  collectionId: number;
  start: Date;
  end: Date;
  dataToCollect: Measures[];
  fcpsData: ExistingData;
}
