import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { StudentsComponent } from "./components/students/students.component";
import { PaymentsComponent } from "./components/payments/payments.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { LoadStudentsComponent } from "./components/load/load-students/load-students.component";
import { LoadPaymentsComponent } from "./components/load/load-payments/load-payments.component";
import { AdminTemplateComponent } from "./components/admin-template/admin-template.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminTemplateComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'loadStudents', component: LoadStudentsComponent },
      { path: 'loadPayments', component: LoadPaymentsComponent },]
  },

];
