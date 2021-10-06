import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AgmCoreModule } from '@agm/core';
import { } from '@google/maps';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule, MatDialog,MatDialogRef} from  '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './component/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { ClientNavComponent } from './component/client-nav/client-nav.component';
import { ClientHomeComponent } from './component/client-home/client-home.component';
import { ClientVaccineComponent } from './component/client-vaccine/client-vaccine.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { AdminNavComponent } from './component/admin-nav/admin-nav.component';
import { AdminBatchComponent } from './component/admin-batch/admin-batch.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminAppointmentComponent} from './component/admin-appointment/admin-appointment.component';
import { AdminBatchInfoComponent } from './component/admin-batch-info/admin-batch-info.component';
import { AdminAppointmentAppointComponent } from './component/admin-appointment-appoint/admin-appointment-appoint.component';
import { AppointDialogComponent } from './component/admin-appointment/admin-appointment.component';

const appRoutes: Routes = [
  {path:'login',component:LoginComponent},
  //{path: '',redirectTo: '/login', pathMatch: 'full' },
  {path:'',redirectTo: '/admin/home', pathMatch: 'full' },
  {path:'admin/home',component:AdminHomeComponent},
  {path:'admin/vaccine',component:AdminBatchComponent},
  {path:'admin/vaccine/batches',component:AdminBatchInfoComponent},
  {path:'admin/appointment',component:AdminAppointmentComponent},
  {path:'home',component:ClientNavComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ClientNavComponent,
    ClientHomeComponent,
    ClientVaccineComponent,
    AdminHomeComponent,
    AdminNavComponent,
    AdminBatchComponent,
    AdminAppointmentComponent,
    AdminBatchInfoComponent,
    AdminAppointmentAppointComponent,
    AppointDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTabsModule,
    MatStepperModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonToggleModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSQMLteimv75SIbD39HpsDUxrgW6gZ2nY'}),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
