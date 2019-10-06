import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  friendId: any;
  friends: User[];
  friend: User;

  constructor(private activatedRoute:ActivatedRoute, private serviceUser:UserService) { 
    this.friends = this.serviceUser.getFriends();
    console.log(this.friends);
    this.friendId = this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);

    this.friend = this.friends.find((record)=>{
      return record.uid == this.friendId;
    })

    console.log(this.friend);
  }

  ngOnInit() {
  }

}
