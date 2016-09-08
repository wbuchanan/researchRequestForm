export class Address {
  streetNumber: string;
  streetDirection: string;
  streetName: string;
  streetType: string;
  unitType: string;
  unitNumber: string;
  city: string;
  state: string;
  zipCode: string;
  secondLine: boolean;

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
