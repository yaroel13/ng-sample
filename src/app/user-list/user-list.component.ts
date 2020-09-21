import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/sync/user.service';
import { RecentSelectedService } from '../service/user/recent-selected.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  dataList : User[] = []
  selectedUser: User

  constructor(
    private userService : UserService,
    private recentlySelectedUserService : RecentSelectedService
  ) { }

  ngOnInit() {
    console.log("USER WORKS")

    this.userService.getUserList().subscribe((data) => {
      console.log(data)
      this.dataList = data
    },
    (error) => {
      console.log(error)
    })

  }

  select(user) {
    console.log(user)
    this.recentlySelectedUserService.getRecentlySelectedUser(user)
    this.selectedUser = user
  }

  addNewItem(user) {
    this.dataList.push(user)
    this.userService.addNewUser(user).subscribe(data => {
      console.log(data)
    },
    (error) => {
      console.log(error)  
    })
  }

}

export interface User {
  name: string,
  username: string,
  email: string
  address: Address,
  company: Company
}

export interface Address {
  street: string,
  suite: string,
  city: string
}

export interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}
