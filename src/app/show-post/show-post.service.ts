import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import {Observable} from 'rxjs';

@Injectable()
export class ShowPostService {

  constructor(private http: HttpClient) {

  }

  deletePost(id) {
    return this.http.post('/api/post/deletePost',{id : id});
  }

  getAllPost(): Observable<any> {
    return this.http.post('/api/post/getAllPost', {});
  }
}
