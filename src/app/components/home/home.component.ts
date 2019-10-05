import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  friends:User[];

  constructor() { 
    let usuario1:User ={
      nick: "Carlos",
      age: 26,
      email: "carlosa.ruales@gmail.com",
      friend:true,
      uid:1
    }

    let usuario2:User ={
      nick: "Marcela",
      age: 26,
      email: "marcela.ruales@gmail.com",
      friend:false,
      uid:2
    }

    let usuario3:User ={
      nick: "Deyanira",
      age: 26,
      email: "deyanira.acosta@gmail.com",
      friend:true,
      uid:3
    }

    let usuario4:User ={
      nick: "Johana",
      age: 26,
      email: "deyanira.acosta@gmail.com",
      friend:true,
      uid:4
    }

    let usuario5:User ={
      nick: "Alberto",
      age: 26,
      email: "alberto.ruales@gmail.com",
      friend:true,
      uid:5
    }

    this.friends = [usuario1,usuario2,usuario3,usuario4,usuario5];

  }

  ngOnInit() {
  }

}
