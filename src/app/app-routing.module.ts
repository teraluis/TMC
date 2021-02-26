import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from './services/front/auth.guard';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {ReportsComponent} from './modules/reports/reports.component';
import {CitiesComponent} from './modules/cities/cities.component';
import {UsersComponent} from './modules/users/users.component';
import {LoginComponent} from './pages/login/login.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
      {path: 'dashboard', component: DashboardComponent},
      {
        path: 'reports', children: [
          {path: '', component: ReportsComponent},
          {
            path: ':interventionId/orders/:orderId',
            component: ReportsComponent
          }
        ]
      },
      {
        path: 'cities', children: [
          {path: '', component: CitiesComponent},
          {path: ':id', component: CitiesComponent},
        ]
      },
      {
        path: 'users', children: [
          {path: '', component: UsersComponent},
          {path: ':id', component: UsersComponent},
        ]
      },
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
