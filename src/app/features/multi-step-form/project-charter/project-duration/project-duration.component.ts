import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-project-duration',
  templateUrl: './project-duration.component.html',
  styleUrls: ['./project-duration.component.scss']
})
export class ProjectDurationComponent implements OnInit {

  public projectDurationFormGroup;
  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.projectDurationFormGroup = this.controlContainer.control.get('projectCharterDuration');
  }

}
