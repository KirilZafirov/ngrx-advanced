import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-operation-plan',
  templateUrl: './operation-plan.component.html',
  styleUrls: ['./operation-plan.component.scss']
})
export class OperationPlanComponent implements OnInit {

  $canProgress: Observable<boolean>;
  public parentForm;
  constructor(private parentControl: ControlContainer,
    private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.parentForm = this.parentControl.control as FormGroup;

    const controls = ['descriptionEn'];

    this.$canProgress = this.utilityService.getValidityOfControls(this.parentForm, controls);

  }

}
