import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  public projectOverviewFormGroup;
  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.projectOverviewFormGroup = this.controlContainer.control.get('projectCharterOverview');
  }
}
