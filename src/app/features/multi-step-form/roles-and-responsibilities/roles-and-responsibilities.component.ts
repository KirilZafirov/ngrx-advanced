import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-roles-and-responsibilities',
  templateUrl: './roles-and-responsibilities.component.html',
  styleUrls: ['./roles-and-responsibilities.component.scss']
})
export class RolesAndResponsibilitiesComponent implements OnInit {


  public parentForm;
  constructor(private parentControl: ControlContainer) {
  }

  ngOnInit() {
    this.parentForm = this.parentControl.control;
  }

}
