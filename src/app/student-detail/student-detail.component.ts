import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  student = {
    id: 1,
    name: 'Madhu Sharma',
    grade: 'Grade 8-A',
    rollNumber: '08A-14',
    status: 'Present',
    guardian: 'Rao',
    phone: '999-999-9999',
    address: 'A-Block, 1st Street, Hyderabad',
    email: 'madhu.sharma@school.com'
  };

  constructor(private route: ActivatedRoute) {
    const studentId = Number(this.route.snapshot.paramMap.get('id')) || 1;
    const students = [
      {
        id: 1,
        name: 'Madhu Sharma',
        grade: 'Grade 8-A',
        rollNumber: '08A-14',
        status: 'Present',
        guardian: 'Rao',
        phone: '999-999-9999',
        address: '14 Oak Street, Springfield',
        email: 'madhu.sharma@school.com'
      },
      {
        id: 2,
        name: 'Daniel Smith',
        grade: 'Grade 9-B',
        rollNumber: '09B-05',
        status: 'Late',
        guardian: 'Mrs. Smith',
        phone: '222-222-2222',
        address: '22 Pine Avenue, Brookside',
        email: 'daniel.smith@school.com'
      },
      {
        id: 3,
        name: 'Meera Patel',
        grade: 'Grade 7-C',
        rollNumber: '07C-21',
        status: 'Present',
        guardian: 'Mr. Patel',
        phone: '333-333-3333',
        address: '9 River Road, Lakeside',
        email: 'meera.patel@school.com'
      },
      {
        id: 4,
        name: 'Nora James',
        grade: 'Grade 10-A',
        rollNumber: '10A-02',
        status: 'Absent',
        guardian: 'Mrs. James',
        phone: '444-444-4444',
        address: '30 Maple Lane, Greenfield',
        email: 'nora.james@school.com'
      }
    ];

    this.student = students.find((item) => item.id === studentId) ?? students[0];
  }
}
