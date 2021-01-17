import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  public riskStepOneFormGroup;
  constructor(private controlContainer: ControlContainer) {
  }
  public parentForm;
  ngOnInit() {
    this.parentForm = this.controlContainer.control;
    this.riskStepOneFormGroup = this.controlContainer.control.get('stepOne');
  }

}
