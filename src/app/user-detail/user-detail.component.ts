import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/sync/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  userId

  posts = []
  userDetail

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log(params)
      this.userId = params.get("userId")

      this.userService.getUserPosts(this.userId).subscribe((data) => {
        console.log(data)
        this.posts = data
      },
      (error) => {
        console.log(error)
      })

      this.userService.getUserList(this.userId).subscribe((data) => {
        console.log(data)
        this.userDetail = data
      },
      (error) => {
        console.log(error)
      })

    })
  }

}
