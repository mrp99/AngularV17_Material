import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <router-outlet />
  <h1>teste</h1>
`,
})
export class AppComponent {

}
