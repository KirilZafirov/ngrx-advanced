import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

  public riskStepTwoFormGroup;

  public parentForm;
  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {

    this.parentForm = this.controlContainer.control;
    this.riskStepTwoFormGroup = this.parentForm.controls.get('stepTwo');
  }

}
