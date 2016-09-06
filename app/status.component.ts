import {Component, OnInit, Input} from '@angular/core';
import { Status } from './status';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {PeopleComponent} from "./people.component";

@Component({
  selector: 'status',
  templateUrl: '../app/status.component.html'
})
export class StatusComponent implements OnInit {
  private status: Status = new Status();
  statusForm: FormGroup;

  statusCategories = [ "Submitted", "In Progress", "Awaiting Approval", "Assigned", "Rejected",
                        "Forward to Other Department", "Additional Information Required", "Completed"];


  @Input()
  assignee: PeopleComponent = new PeopleComponent();

  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.statusForm = this._fb.group( {
      openedDate: [Date, Validators.required],
      closedDate: [Date],
      assignedTo: this.assignee,
      statusCategory: ['', Validators.required],
      emailBody: [''],
      internalNotes: ['']
    });
  }

  public getStatus() : Status {
    return this.status;
  }

}

