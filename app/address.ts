export class Address {
  streetNumber: string = '';
  streetDirection: string = '';
  streetName: string = '';
  streetType: string = '';
  unitType: string = '';
  unitNumber: string = '';
  city: string = '';
  state: string = '';
  zipCode: string = '';
  secondLine: boolean = false;

  constructor(private stNumber?: string, private stDirection?: string, private stName?: string, private stType?: string,
              private uType?: string, private uNumber?: string, private cityName?: string, private stateName?: string,
              private zip?: string, private line2?: boolean) {
    this.streetNumber = stNumber;
    this.streetDirection = stDirection;
    this.streetName = stName;
    this.streetType = stType;
    this.unitNumber = uNumber;
    this.unitType = uType;
    this.city = cityName;
    this.state = stateName;
    this.zipCode = zip;
    this.secondLine = line2;
  }

  getAddressLine1() : string {
    return this.streetNumber.concat(' ').concat(this.streetDirection).concat(' ').concat(this.streetName).concat(' ').concat(this.streetType);
  }

  getAddressLine2() : string {
    return this.unitType.concat(' ').concat(this.unitNumber);
  }

  getAddressLine3() : string {
    return this.city.concat(', ').concat(this.state).concat(', ').concat(this.zipCode);
  }

}
