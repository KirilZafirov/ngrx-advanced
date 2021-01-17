
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MultiStepFormRoutingModule } from './multi-step-form-routing.module';
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
import { UtilityService } from './utility.service';

@NgModule({
  imports: [
    MultiStepFormRoutingModule,
    SharedModule,
  ],
  declarations: [
    MultiStepFormComponent,
    OperationPlanComponent,
    ProjectCharterComponent,
    ProjectOverviewComponent,
    ProjectTeamComponent,
    ProjectDurationComponent,
    ProjectMilestonesComponent,
    RiskRegisterComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    StepSixComponent,
    RolesAndResponsibilitiesComponent
  ],
  entryComponents: [],
  providers:[UtilityService]
})
export class MultiStepFormModule { }
