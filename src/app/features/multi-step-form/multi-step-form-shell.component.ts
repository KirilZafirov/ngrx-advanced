
import { ChangeDetectionStrategy, Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilityService } from './utility.service';
@Component({
  templateUrl: './multi-step-form-shell.component.html',
   styleUrls:['./multi-step-form-shell.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class MultiStepFormComponent implements OnInit {
  public mainForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      operationPlan: this.fb.group({
        descriptionEn: ['',Validators.required,],
      }),
      projectCharter: this.fb.group({
        projectCharterOverview: this.fb.group({
          descriptionEn: ['',Validators.required, Validators.maxLength(500)],
          descriptionAr: ['',Validators.required, Validators.maxLength(500)],
          goalsAndObjectives: ['',Validators.required, Validators.maxLength(500)],
        }),
        projectCharterMilestones: this.fb.group({
          deliverables : this.fb.array([
            this.fb.group({
              milestoneTitle: ['',Validators.required],
              weight: ['',Validators.required],
              dueDate: ['',Validators.required],
              deliverables : this.fb.array([
                this.fb.group({
                  tags: ['',Validators.required],
                })
              ]),
            })
          ]),
        }),
        projectCharterTeam:  this.fb.group({
          projectManager : this.fb.array([
            this.fb.group({
              projectManagerIds: ['',Validators.required],
            })
          ]),
          projectSponsors : this.fb.array([
            this.fb.group({
              projectSponsorIds: ['',Validators.required],
            })
          ]),
          projectTeam : this.fb.array([
            this.fb.group({
              projectTeamIds: ['',Validators.required],
            })
          ]),
        }),
        projectCharterDuration: this.fb.group({
          from: [null ,Validators.required],
          to: [null ,Validators.required],
        }),
        rolesAndResponsibilities: this.fb.group({
          teamMembers : this.fb.array([
            this.fb.group({
              responsibilities : this.fb.array([
                this.fb.group({
                  responsibility: ['',Validators.required , Validators.maxLength(500)],
                })
              ]),
            })
          ]),
        }),
      }),
      risks: this.fb.array([
        this.fb.group({
          stepOne: this.fb.group({
            title: ['',Validators.required],
            type: ['',Validators.required],
            description: ['',Validators.required],
            owner: ['',Validators.required],
            actionOwner: ['',Validators.required],
          }),
          stepTwo: this.fb.group({
            controlDescription: ['',Validators.required],
            controlType: ['',Validators.required],
            controlFrequency: ['',Validators.required],
          }),
          stepThree:this.fb.group({
            likelihood: ['',Validators.required],
            impact: ['',Validators.required],
          }),
          stepFour: this.fb.group({
            likelihood: ['',Validators.required],
            impact: ['',Validators.required],
          }),
          stepFive: this.fb.group({
            likelihood: ['',Validators.required],
            impact: ['',Validators.required],
          }),
          stepSix: this.fb.group({
            from: ['',Validators.required],
            to: ['',Validators.required],
            mitigationProgress: ['',Validators.required],
          }),
        })
      ])
    })
  }


  save() {
    Object.keys(this.mainForm.controls).forEach((field) => {
      const control = this.mainForm.get(field);
      control.markAsTouched();
    })
  }


}
