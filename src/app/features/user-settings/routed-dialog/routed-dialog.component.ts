import { Component , TemplateRef } from '@angular/core';

@Component({
  selector: 'user-routed-dialog',
  templateUrl: './routed-dialog.component.html',
  styleUrls: ['./routed-dialog.component.scss']
})
export class RoutedDialogComponent {
  contentTemplate: TemplateRef<any>;
}