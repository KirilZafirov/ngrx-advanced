import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-project-milestones',
  templateUrl: './project-milestones.component.html',
  styleUrls: ['./project-milestones.component.scss']
})
export class ProjectMilestonesComponent implements OnInit {

  public projectMilestonesFormGroup;
  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.projectMilestonesFormGroup = this.controlContainer.control.get('projectCharterMilestones');
  }
}
