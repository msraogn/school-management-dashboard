import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  attendance = [
    { student: 'Madhu Sharma', present: 18, total: 20, rate: '90%' },
    { student: 'Daniel Smith', present: 17, total: 20, rate: '85%' },
    { student: 'Meera Patel', present: 20, total: 20, rate: '100%' },
    { student: 'Nora James', present: 16, total: 20, rate: '80%' }
  ];
}
