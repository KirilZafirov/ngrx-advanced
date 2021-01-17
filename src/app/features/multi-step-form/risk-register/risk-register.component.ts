import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-risk-register',
  templateUrl: './risk-register.component.html',
  styleUrls: ['./risk-register.component.scss']
})
export class RiskRegisterComponent implements OnInit {

  public riskFormArray;
  public parentForm;
  constructor(private parentControl: ControlContainer) {
  }

  ngOnInit() {
    this.parentForm = this.parentControl.control;
    this.riskFormArray = this.parentForm.get('risks');
  }

  addRisk() {

  }

  editRisk(i) {

  }
  removeRisk(i) {

  }
  riskDetails(i) {

  }
}
