import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    let myUser:User ={
      nick: "Carlos",
      age: 26,
      email: "carlosa.ruales@gmail.com",
      friend:true,
      uid:1
    }

    let users: User[] = [];

    users.push(myUser);

    console.log(myUser);
  }

  ngOnInit() {
  }

}
