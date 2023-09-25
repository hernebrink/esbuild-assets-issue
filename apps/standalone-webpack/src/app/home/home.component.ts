import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '@ids-demo/components';
import { ApiService } from '@ids-demo/api';

@Component({
  selector: 'es-home',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
  template: `
   <ids-container
      language="en"
      locale="en-US"
      padding="16"
      hidden
      background-color="--ids-homepage-color-background-default"
      animated
    >
      <ids-theme-switcher mode="light"></ids-theme-switcher>

      <ids-layout-grid auto-fit="true" gap="8" wrap="true">
        <ids-layout-grid-cell *ngFor="let category of categories$ | async">
          <ids-text font-size="20" type="h2">{{ category.name }}</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ui-hero></ui-hero>
    </ids-container>
  `,
})
export class HomeComponent {
  readonly categories$ = inject(ApiService).data$;
}

