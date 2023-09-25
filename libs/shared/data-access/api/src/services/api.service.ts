import { Injectable } from '@angular/core';
import { Category } from '@ids-demo/api-inferfaces';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private categories: Category[] = [
    { id: 1, name: 'Form Inputs', icon: 'display' },
    { id: 2, name: 'Navigation and Interaction', icon: 'map' },
    { id: 3, name: 'Messages and Alerts', icon: 'success' },
    { id: 4, name: 'Lists', icon: 'spreadsheet' },
    { id: 5, name: 'Layouts', icon: 'project' },
    { id: 6, name: 'Patterns', icon: 'design-mode' },
    { id: 7, name: 'Charts and Visualizations', icon: 'line-bar-chart' },
    { id: 8, name: 'Typography', icon: '' },
  ];

  readonly data$ = of(this.categories);
}
