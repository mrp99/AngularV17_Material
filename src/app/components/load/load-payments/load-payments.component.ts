import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-load-payments',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './load-payments.component.html',
  styleUrl: './load-payments.component.scss'
})
export class LoadPaymentsComponent {

}
