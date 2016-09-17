import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ExistingData } from './existing-data';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'existing-data',
    templateUrl: '../app/existing-data.component.html'
})
export class ExistingDataComponent implements OnInit {
  @Output() currentData: EventEmitter<ExistingData> = new EventEmitter<ExistingData>();
  private existingData: FormGroup;
  private helpStudentLevel: string = '';
  private helpClassRoomLevel: string = '';
  private helpTeacherLevel: string = '';
  private helpGradeLevel: string = '';
  private helpSchoolLevel: string = '';
  private helpDistrictLevel: string = '';
  private existing: ExistingData = new ExistingData();
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
      this.existingData = this._fb.group( {
        studentLevel: [''],
        classRoomLevel: [''],
        teacherLevel: [''],
        gradeLevel: [''],
        schoolLevel: [''],
        districtLevel: ['']
      });
  }

  private helpDisplay: string = '';

  private displayHelpStudentLevel() : void {
    this.helpStudentLevel = 'Use this field to identify individual student-level data.  For example, if you wanted a data set of student records with sex, race, EL status, and test scores, you would request that here.';
  }

  private displayHelpClassRoomLevel() : void {
    this.helpClassRoomLevel = 'Use this field to specify student level data that you would like aggregated at the classroom level.  For example, if you wanted to know the percent of EL students per class in a school you would enter that here.';
  }

  private displayHelpTeacherLevel() : void {
    this.helpTeacherLevel = 'Use this field to specify teacher-level data.  For example, if you wanted a data set of teacher records with the sex, race, and National Board Certification indicator for teachers you would request that here.' ;
  }

  private displayHelpGradeLevel() : void {
    this.helpGradeLevel = 'Use this field to specify student and/or teacher level data that you would like aggregated at the grade level.  For example, if you wanted to know the number of 3rd grade teachers in a school, you would enter that here.';
  }

  private displayHelpSchoolLevel() : void {
    this.helpSchoolLevel = 'Use this field to specify student and/or teacher level that that you would like aggregated at the school level.  For example, if you wanted to know the percentage of teachers at each school with a Master\'s degree or higher you would request that here.';
  }

  private displayHelpDistrictLevel() : void {
    this.helpDistrictLevel = 'Use this field to specify student and/or teacher level that that you would like aggregated at the district level.  For example, if you wanted to know the percentage of students in the gifted/talented program across the district by race you would request that here.';
  }

  private undisplayHelpStudentLevel() : void {
    this.helpStudentLevel = '';
  }

  private undisplayHelpClassRoomLevel() : void {
    this.helpClassRoomLevel = '';
  }

  private undisplayHelpTeacherLevel() : void {
    this.helpTeacherLevel = '' ;
  }

  private undisplayHelpGradeLevel() : void {
    this.helpGradeLevel = '';
  }

  private undisplayHelpSchoolLevel() : void {
    this.helpSchoolLevel = '';
  }

  private undisplayHelpDistrictLevel() : void {
    this.helpDistrictLevel = '';
  }




  public updateExistingData() : void {
    this.currentData.emit( this.existing );
  }

}
