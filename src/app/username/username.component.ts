import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  
  username:string = '';

  constructor() { }

  ngOnInit() {
  }

  resetUsername(){
    this.username = '';
  }
  checkUserNameValidity(){
     return this.username==''?false:true;
  }

}
