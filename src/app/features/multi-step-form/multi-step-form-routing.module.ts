
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiStepFormComponent } from './multi-step-form-shell.component';
import { OperationPlanComponent } from './operation-plan/operation-plan.component';
import { ProjectCharterComponent } from './project-charter/project-charter.component';
import { ProjectDurationComponent } from './project-charter/project-duration/project-duration.component';
import { ProjectMilestonesComponent } from './project-charter/project-milestones/project-milestones.component';
import { ProjectOverviewComponent } from './project-charter/project-overview/project-overview.component';
import { ProjectTeamComponent } from './project-charter/project-team/project-team.component';
import { RiskRegisterComponent } from './risk-register/risk-register.component';
import { StepFiveComponent } from './risk-register/step-five/step-five.component';
import { StepFourComponent } from './risk-register/step-four/step-four.component';
import { StepOneComponent } from './risk-register/step-one/step-one.component';
import { StepSixComponent } from './risk-register/step-six/step-six.component';
import { StepThreeComponent } from './risk-register/step-three/step-three.component';
import { StepTwoComponent } from './risk-register/step-two/step-two.component';
import { RolesAndResponsibilitiesComponent } from './roles-and-responsibilities/roles-and-responsibilities.component';


const routes: Routes = [
  {
    path:'',
    component: MultiStepFormComponent,
    children: [
      {
        path:'operation-plan',
        component: OperationPlanComponent,
      },
      {
        path:'project-charter',
        component: ProjectCharterComponent,
        children: [
          {
            path:'overview',
            component: ProjectOverviewComponent,
          },
          {
            path:'team',
            component: ProjectTeamComponent,
          },
          {
            path:'duration',
            component: ProjectDurationComponent,
          },
          {
            path:'milestones',
            component: ProjectMilestonesComponent,
          },

        ]
      },
      {
        path:'roles-and-responsibilities',
        component: RolesAndResponsibilitiesComponent,
      },
      {
        path:'risk-register',
        component: RiskRegisterComponent,
        children: [
          {
            path:'step-one',
            component: StepOneComponent,
          },
          {
            path:'step-two',
            component: StepTwoComponent,
          },
          {
            path:'step-three',
            component: StepThreeComponent,
          },
          {
            path:'step-four',
            component: StepFourComponent,
          },
          {
            path:'step-five',
            component: StepFiveComponent,
          },
          {
            path:'step-six',
            component: StepSixComponent,
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiStepFormRoutingModule {
}
