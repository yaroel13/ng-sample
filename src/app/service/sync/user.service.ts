import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getUserList(userId = "") : Observable<any> {
    let url = "https://jsonplaceholder.typicode.com/users/"+userId
    return this.http.get(url)
  }

  getUserPosts(id) : Observable<any> {
    const url ="https://jsonplaceholder.typicode.com/posts"

    const params = new HttpParams().set('userId', id)
    const httpOptions = {
      params: params
    };

    return this.http.get(url, httpOptions)
  }

  addNewUser(data) : Observable<any> {
    let url = "https://jsonplaceholder.typicode.com/users/"
    return this.http.post(url, data)
  }

}
