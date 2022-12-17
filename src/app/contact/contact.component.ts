import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  no = '1234567890';
  mailid = 'vcetsolecthon@vcet.edu.in';
  name = '';
  email = '';
  phone = '';
  subject = '';
  message = '';
  sendEmail(){
    window.open('mailto:{{mailid}}?subject={{subject}}&body={{message}}');
  }
  glink =
    "https://www.google.com/maps/place/19%C2%B023'01.9%22N+72%C2%B049'43.2%22E";
  Location =
    "Vidyavardhini's College of Engineering and Technology, Vasai, Maharashtra, India";
  constructor() {}

  ngOnInit(): void {}
}
