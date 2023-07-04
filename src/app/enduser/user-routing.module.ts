import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../shared/components/home/home.component';
import { RouteConstants } from '../shared/constants/RouteConstants';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { AboutComponent } from '../core/about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { TrainersComponent } from './trainers/trainers.component';
import { EventsComponent } from './events/events.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: RouteConstants.dashboard,
        component: DashboardComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'courses',
        component:CoursesComponent
      },
      {
        path:'trainers',
        component:TrainersComponent
      },
      {
        path:'events',
        component:EventsComponent
      },
      {
        path:'pricing',
        component:PricingComponent
      },
      {
        path:'contactus',
        component:ContactusComponent
      },
      // {
      //   path: '',
      //   redirectTo: RouteConstants.dashboard
      // },
      {  path: '**',
        redirectTo: RouteConstants.dashboard
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
