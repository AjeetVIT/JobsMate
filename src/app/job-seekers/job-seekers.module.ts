import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { MaterialModule } from '../shared/material Module/material/material.module';
import { JobSeekersComponent } from './job-seekers.component';
import { JobSeekerRoutingModule } from './job-seeker-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AppliedJobsComponent,
    ProfileComponent,
    SearchJobComponent,
    JobSeekersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    JobSeekerRoutingModule
  ],
  exports:[
    SearchJobComponent,
    JobSeekersComponent,
  ]
})
export class JobSeekersModule { }
