import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-load-students',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './load-students.component.html',
  styleUrl: './load-students.component.scss'
})
export class LoadStudentsComponent {

}
