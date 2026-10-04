import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentListComponent } from './student-list.component';

@NgModule({
  declarations: [StudentListComponent],
  imports: [CommonModule, RouterModule]
})
export class StudentListModule { }
