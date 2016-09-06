export class Address {
  private streetNumber: string = "";
  private streetDirection: string = "";
  private streetName: string = "";
  private streetType: string = "";
  private unitType: string = "";
  private unitNumber: string = "";
  private city: string = "";
  private state: string = "";
  private zipCode: string = "";
  private secondLine: boolean = false;

  constructor() { }

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
