import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { POST } from '../../interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlVariable } from 'src/app/utils/variable';
// import * as fs from "fs";
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private readonly url: string = `${UrlVariable.urlPost}`
  private readonly apiCreate = "posts"; //// chưa biết cách tạo api create ở server fake
  private readonly apiDelete = "posts";
  private readonly apiGet = "posts";
  private readonly apiUpdate = "posts";

  private posts: POST[] = [];
  private postsSubject: BehaviorSubject<POST[]> = new BehaviorSubject<POST[]>([]);
  private shareIdSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

  async addPost(body: POST) {
    return this.http.post<POST>(`${this.url}/${this.apiCreate}`, body)
      .toPromise()
      .then(res => {
        const mapBody = {
          id: this.posts[this.posts.length - 1].id + 1,
          title: body.title,
          body: body.body,
        }
        this.posts.push(mapBody);
        this.updateOnChangeData(this.posts);
      })
      .catch(err => {
        return err;
      });
  }

  deletePost(id: string) {
    const body = {
      params: {
        id: id
      }
    }
    return this.http.delete(`${this.url}/${this.apiDelete}/${id}`, body)
      .toPromise()
      .then(res => {
        let index = this.posts.findIndex(item => item.id == id);
        if (index != -1) this.posts.splice(index, 1);
        this.updateOnChangeData(this.posts);
      })
      .catch(err => {
        return err;
      });
  }

  updatePost(body: POST) {
    return this.http.put<POST>(`${this.url}/${this.apiUpdate}/${body.id}`, body)
      .toPromise()
      .then(res => {
        const index = this.posts.findIndex(item => item.id == body.id);
        if (index != -1) {
          this.posts[index].title = body.title;
          this.posts[index].body = body.body;
        }
        this.updateOnChangeData(this.posts);
      })
      .catch(err => {
        return err;
      });
  }

  getOnePost(id: string) {
    const index = this.posts.findIndex(item => item.id == id);
    if (index == -1) return null;
    return this.posts[index];
  }

  displayAll(): Observable<POST[]> {
    return this.postsSubject.asObservable();
  }

  fetchData() {
    return this.http.get<POST[]>(`${this.url}/${this.apiGet}`)
      .toPromise()
      .then((res: any) => {
        this.posts = res;
        this.updateOnChangeData(this.posts);
      })
      .catch(err => {
        return err;
      });
  }

  setIdToGetOne(id: string) {
    this.shareIdSubject.next(id);
  }

  getIdToGetOne(): Observable<string> {
    return this.shareIdSubject.asObservable();
  }

  private updateOnChangeData(posts: POST[]) {
    this.postsSubject.next(posts);
  }

  notifyError() {
    window.alert('Oops! Error Network.');
  }

  notifySuccess() {
    window.alert('Done');
  }

  // getShippingPrices() {
  //   return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json')
  // }


}
