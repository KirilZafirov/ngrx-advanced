import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss']
})
export class StepFiveComponent implements OnInit {

  public riskStepFiveFormGroup;
  constructor(private controlContainer: ControlContainer) {
  }
  public parentForm;

  ngOnInit() {

    this.parentForm = this.controlContainer.control;
    this.riskStepFiveFormGroup = this.controlContainer.control.get('stepFive');

  }

}
