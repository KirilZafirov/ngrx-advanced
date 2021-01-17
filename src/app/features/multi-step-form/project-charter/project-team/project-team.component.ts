import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-project-team',
  templateUrl: './project-team.component.html',
  styleUrls: ['./project-team.component.scss']
})
export class ProjectTeamComponent implements OnInit {

  public projectTeamFormGroup;
  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.projectTeamFormGroup = this.controlContainer.control.get('projectCharterTeam');
  }

}
