import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecentSelectedService {

  private recentSelectedUserSource = new Subject<any>()
  recentSelectedUserSourceStream$ = this.recentSelectedUserSource.asObservable();

  getRecentlySelectedUser(selected) {
    this.recentSelectedUserSource.next(selected)
  }

  constructor() { }
}
