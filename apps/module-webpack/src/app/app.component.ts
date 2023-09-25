import { ChangeDetectionStrategy, Component } from '@angular/core';
import 'ids-enterprise-wc/enterprise-wc.js';

@Component({
  selector: 'es-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
