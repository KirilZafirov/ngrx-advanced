import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'product-list-ghost',
  templateUrl: './product-list-ghost.component.html',
  styleUrls: ['./product-list-ghost.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListGhostComponent {

  ghostElements = new Array(5);
  constructor() {
  }
}
