import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ApiService } from '@ids-demo/api';


@Component({
  selector: 'es-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly categories$ = inject(ApiService).data$;
}
