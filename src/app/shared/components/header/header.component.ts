import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  userName: String ='';

  constructor() { }

  ngOnInit() {
    this.userName = localStorage.getItem('firstName') || '';
    console.log(this.userName);
  }
}


