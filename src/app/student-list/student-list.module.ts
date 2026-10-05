import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentListComponent } from './student-list.component';

@NgModule({
  declarations: [StudentListComponent],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class StudentListModule { }
