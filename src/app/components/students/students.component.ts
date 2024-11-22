import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AnyNsRecord } from 'dns';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
  imports: [
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginator,
    MatSortModule,
    MatSort,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class StudentsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public students: any[] = [];
  public displayedColumns: string[] = ['id', 'firstName', 'lastName', 'payments'];
  public dataSource: any;

  public firstNames = [
    'Alexander', 'Elizabeth', 'Maximiliano', 'Theodore', 'Charlotte', 'Benjamin', 'Seraphina',
    'Sebastian', 'Isabella', 'Montgomery', 'Valentina', 'Christopher', 'Gwendolyn', 'Fitzgerald',
    'Anastasia', 'Nathaniel', 'Penelope', 'Alexander', 'Ophelia', 'Madeleine'
  ];

  public lastNames = [
    'Harrison', 'Montgomery', 'Wellington', 'Pereira', 'Kendall', 'Fitzgerald', 'Van Der Linden',
    'Williamson', 'MacAllister', 'Benedict', 'Albuquerque', 'Blackwood', 'Wetherford', 'Carrington',
    'Vanderbilt', 'Schwarz', 'MacKenzie', 'Hawthorne', 'Beauregard', 'Thornfield'
  ];

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.getStudents();
  }


  private getStudents(): void {

    for (let i = 1; i < 20; i++) {
      const firstName = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
      const lastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];

      this.students.push({
        id: i,
        firstName: firstName,
        lastName: lastName
      });
    }
    this.dataSource = new MatTableDataSource(this.students);
  }

  private getPaginatorSort() {
    const page = this.paginator;
    const sort = this.sort;
    this.dataSource.paginator = page;
    this.dataSource.sort = sort;
  }

  ngAfterViewInit(): void {
    this.getPaginatorSort();
  }

  public filterData(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getPayment(stundent: any): void {
    this.router.navigateByUrl("/payments")
  }

}
