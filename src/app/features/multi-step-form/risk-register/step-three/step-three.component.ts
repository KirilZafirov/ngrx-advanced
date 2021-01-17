import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {

  public riskStepThreeFormGroup;
  public parentForm;
  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {

    this.parentForm = this.controlContainer.control;
    this.riskStepThreeFormGroup = this.controlContainer.control.get('stepThree');

  }

}
