import {MatSnackBar , MatSnackBarConfig} from '@angular/material/snack-bar';
import { Injectable, NgZone } from '@angular/core'; 

@Injectable()
export class NotificationService {
  constructor(private readonly snackBar: MatSnackBar, private readonly zone: NgZone) {}

  default(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'alert-secondary',
    });
  }

  info(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'alert-primary',
    });
  }

  success(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'alert-success',
    });
  }

  warn(message: string) {
    this.show(message, {
      duration: 5000,
      panelClass: 'alert-warning',
    });
  }

  error(message: string) {
    this.show(message, {
      duration: 5000,
      panelClass: 'alert-warning',
    });
  }

  private show(message: string, configuration: MatSnackBarConfig) {
    this.zone.run(() => this.snackBar.open(message, null, configuration));
  }
}
