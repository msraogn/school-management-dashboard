import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
  records = [
    { subject: 'Mathematics', exam: 'Midterm', score: '92%', teacher: 'Ms. Lin' },
    { subject: 'Science', exam: 'Midterm', score: '88%', teacher: 'Mr. Cole' },
    { subject: 'English', exam: 'Quiz', score: '95%', teacher: 'Mrs. Owen' },
    { subject: 'History', exam: 'Assignment', score: '84%', teacher: 'Mr. Reed' }
  ];
}
