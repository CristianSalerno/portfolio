import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contact: FormGroup;
  constructor() {
    this.contact = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      message: new FormControl(),
    })
  }

  ngOnInit() {

  }
  send() {
    console.log(this.contact.value);
  }
}
