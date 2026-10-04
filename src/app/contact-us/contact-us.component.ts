import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactDetails = {
    email: 'support@schooladmin.com',
    phone: '+1 (555) 010-9999',
    address: '88 Education Avenue, North Campus, Springfield'
  };
}
