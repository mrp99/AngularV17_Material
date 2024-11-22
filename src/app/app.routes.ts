import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { StudentsComponent } from "./components/students/students.component";
import { PaymentsComponent } from "./components/payments/payments.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'dashboard', component: DashboardComponent },
];
