import { Component } from '@angular/core';
import { appService } from './app.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './app.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<div>{{value}}</div>`, 
  styleUrls: ['./app.component.css'],
  providers :[appService]
})


export class AppComponent {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  name = 'harika';
 value : string ='';
 constructor(private http: HttpClient) {}

//  ngOnInit(): void {
//    this.value= this._appService.getApp();
//  }


posts: Observable<Post[]>;// 1 How to Make a GET Request with a Typescript Interface

getPosts() {
  this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts')    
}


newPost: Observable<any>;//2 How to Make a POST Request datapayload
createPost() {
  const data = {
    id: null,
    userId: 23,
    title: 'My New Post',
    body: 'Hello World!'
  } 

  this.newPost = this.http.post(this.ROOT_URL + '/posts', data)
}
postsParams: Observable<any>;//3 How to Customize URL Parameters
//URL params allow you to send data with a request that can be parsed on the server
getPosts3() {
  const params = new HttpParams().set('user', '1');

  this.postsParams = this.http.get(this.ROOT_URL + '/posts', { params })    
}

}
//NgModule which provides the HttpClient and associated with components services 
//and the interceptors can be added to the chain behind HttpClient by binding them to the multi provider for HTTP_INTERCEPTORS.