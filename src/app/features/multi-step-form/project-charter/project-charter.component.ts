import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-project-charter',
  templateUrl: './project-charter.component.html',
  styleUrls: ['./project-charter.component.scss']
})
export class ProjectCharterComponent implements OnInit {

  public parentForm;
  public projectCharterForm;
  constructor(private parentControl: ControlContainer) {
  }

  ngOnInit() {
    this.parentForm = this.parentControl.control;
    this.projectCharterForm = this.parentForm.get('projectCharter');
  }

}
