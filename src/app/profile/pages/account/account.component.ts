import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  userName: String ='';
  lastName: String ='';
  email: String ='';
  password: String ='';

  constructor() { }

  ngOnInit() {
    this.userName = localStorage.getItem('firstName') || '';
    console.log(this.userName);
    this.lastName = localStorage.getItem('lastName') || '';
    console.log(this.lastName);
    this.email = localStorage.getItem('email') || '';
    console.log(this.email);
    this.password = localStorage.getItem('password') || '';
  }
}
