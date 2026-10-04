import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginModule } from './login/login.module';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListModule } from './student-list/student-list.module';
import { MarksModule } from './marks/marks.module';
import { AttendanceModule } from './attendance/attendance.module';
import { FeesModule } from './fees/fees.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    StudentListModule,
    MarksModule,
    AttendanceModule,
    FeesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
