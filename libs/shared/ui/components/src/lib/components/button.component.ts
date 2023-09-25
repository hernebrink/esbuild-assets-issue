import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ids-button [appearance]="type">
      <ng-content></ng-content>
    </ids-button>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input({ required: true }) type!: 'primary' | 'secondary' | 'tertiery';
}
