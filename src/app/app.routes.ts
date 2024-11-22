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
import { AuthGuard } from "./shared/guards/auth.guard";
import { AuthorizationGuard } from "./shared/guards/authorization.guard";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminTemplateComponent, canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'loadStudents', component: LoadStudentsComponent,
        data: { roles: ['ADMIN'] }, canActivate: [AuthorizationGuard]
      },
      {
        path: 'loadPayments', component: LoadPaymentsComponent,
        data: { roles: ['ADMIN'] }, canActivate: [AuthorizationGuard]
      },]
  },

];
