import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { CitiesComponent } from './modules/cities/cities.component';
import { UsersComponent } from './modules/users/users.component';
import { MenuComponent } from './pages/home/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule, MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {SatDatepickerModule} from 'saturn-datepicker';
import {ChartsModule} from 'ng2-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ErrorComponent } from './modules/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    DashboardComponent,
    ReportsComponent,
    CitiesComponent,
    UsersComponent,
    MenuComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTabsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTreeModule,
    MatSortModule,
    MatSidenavModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatRadioModule,
    MatStepperModule,
    MatBadgeModule,
    NgxMaterialTimepickerModule,
    SatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
