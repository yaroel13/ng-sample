import { Component, OnInit } from '@angular/core';
import { RecentSelectedService } from './service/user/recent-selected.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-training';

  recentlySelectedUser

  constructor(
    private recentlySelectedUserService : RecentSelectedService
  ) {}

  ngOnInit() {
    this.recentlySelectedUserService.recentSelectedUserSourceStream$.subscribe((data) => {
      console.log(data)
      this.recentlySelectedUser = data
    })
  }

}
