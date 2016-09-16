/**
 * Created by billy on 8/30/16.
 */
export class People {
  firstName: string = '';
  lastName: string = '';
  jobTitle: string = '';

  constructor(private _fn?: string, private _ln?: string, private _jt?: string) {
    this.firstName = _fn;
    this.lastName = _ln;
    this.jobTitle = _jt;
  }

}
