import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-step-six',
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.scss']
})
export class StepSixComponent implements OnInit {

  public riskStepSixFormGroup;
  constructor(private controlContainer: ControlContainer) {
  }
  public parentForm;
  ngOnInit() {
    this.parentForm = this.controlContainer.control;
    this.riskStepSixFormGroup = this.controlContainer.control.get('stepSix');
  }

}
