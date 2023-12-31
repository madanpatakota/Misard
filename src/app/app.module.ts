import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsComponent } from './enduser/events/events.component';
import { CoursesComponent } from './enduser/courses/courses.component';
import { CourseDetailsComponent } from './enduser/course-details/course-details.component';
import { TrainersComponent } from './enduser/trainers/trainers.component';
import { AboutComponent } from './core/about/about.component';
import { ArticlesComponent } from './enduser/articles/articles.component';
import { HomeComponent } from './shared/components/home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component'
import { FooterComponent } from './shared/components/footer/footer.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component'
//import { Swiper,SwiperOptions } from 'swiper';
//import {  NgxUsefulSwiperModule } from 'ngx-useful-swiper'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    CoursesComponent,
    CourseDetailsComponent,
    TrainersComponent,
    AboutComponent,
    ArticlesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
