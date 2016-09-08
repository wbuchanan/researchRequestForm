import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Status } from './status';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PeopleComponent } from "./people.component";
import { checkDateRange } from './date-range.validator';

@Component({
  selector: 'status',
  templateUrl: '../app/status.component.html'
})
export class StatusComponent implements OnInit {

  private today: string;

  private statuses: Status[] = new Array(new Status());

  statusForm: FormGroup;

  statusCategories = [ "Submitted", "In Progress", "Awaiting Approval", "Assigned", "Rejected",
                        "Forward to Other Department", "Additional Information Required", "Completed"];

  @Input() assignee: PeopleComponent;

  @Output() theStatus: EventEmitter<Status[]> = new EventEmitter<Status[]>();

  constructor(private _fb: FormBuilder) {
    var x = new Date(Date.now());
    this.today = x.toISOString().substring(0, 10);
  }
  ngOnInit() {
    this.statusForm = this._fb.group( {
      status: this._fb.array( [ this.initStatusFields() ])
    });
  }

  initStatusFields() {
    return this._fb.group({
      openedDate: ['', [Validators.required, checkDateRange]],
      closedDate: ['', [checkDateRange]],
      statusCategory: ['', Validators.required],
      assignedTo: this.assignee,
      emailBody: ['', [Validators.required, Validators.pattern('^([\w]+ ){10,}')]],
      internalNotes: ['']
    });
  }

  addStatusFields() {
    this.statuses.push(new Status());
    const control = <FormArray>this.statusForm.controls['status'];
    control.push(this.initStatusFields());
  }

  removeStatusFields(i: number) {
    this.statuses.pop();
    const control = <FormArray>this.statusForm.controls['status'];
    control.removeAt(i);
  }

  public updateStatus() : void {
    this.theStatus.emit( this.statuses );
  }

}

