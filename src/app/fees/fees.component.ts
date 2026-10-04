import { Component } from '@angular/core';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent {
  feeRecords = [
    { student: 'Madhu Sharma', due: '$250', status: 'Paid', date: '2026-10-03' },
    { student: 'Daniel Smith', due: '$540', status: 'Pending', date: '2026-10-10' },
    { student: 'Meera Patel', due: '$320', status: 'Paid', date: '2026-10-01' },
    { student: 'Nora James', due: '$610', status: 'Pending', date: '2026-10-15' }
  ];
}
