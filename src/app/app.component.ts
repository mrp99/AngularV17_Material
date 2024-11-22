import { Component } from '@angular/core';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [AdminTemplateComponent],
  template: `
  <app-admin-template />
`,
})
export class AppComponent {

}
