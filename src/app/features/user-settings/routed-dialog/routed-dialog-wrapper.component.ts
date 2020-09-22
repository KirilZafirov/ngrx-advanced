import { OnInit, Component , ViewChild , TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutedDialogComponent } from './routed-dialog.component';
@Component({
    template:` 
    <ng-template>
        <router-outlet></router-outlet>    
    </ng-template>
    `
})
export class RoutedDialogWrapperComponent implements OnInit {

    @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
    /**
     *
     */
    
    constructor(
        private dialog: MatDialog,
        private router: Router, 
        private route: ActivatedRoute) {
        
    }

    ngOnInit() { 
        this.openDialog();
    }

    private openDialog() {
        const dialog = this.dialog.open(RoutedDialogComponent);

        dialog.componentInstance.contentTemplate = this.templateRef;

        dialog.afterClosed().subscribe( result => {
            this.router.navigate(["../"] , {
                relativeTo: this.route
            });
        });
    }
}