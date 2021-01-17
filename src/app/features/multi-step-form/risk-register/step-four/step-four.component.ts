import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {

  public riskStepFourFormGroup;
  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.riskStepFourFormGroup = this.controlContainer.control.get('stepFour');
  }
}
