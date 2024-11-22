import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { ProfileComponent } from '../profile/profile.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-admin-template',
  standalone: true,
  imports: [
    MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatSidenavModule, MatListModule, RouterModule
  ],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.scss'
})
export class AdminTemplateComponent {

}
