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
  private readonly apiCreate: string = "posts";
  private readonly apiDelete: string = "posts";
  private readonly apiGet: string = "posts";
  private readonly apiUpdate: string = "posts";

  private posts: POST[] = [];
  private postsSubject: BehaviorSubject<POST[]> = new BehaviorSubject<POST[]>([]);
  private shareIdSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private loadedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   * @description Thêm 1 post mới
   * @param body các thuộc tính implement theo interface
   * @returns null || {}
   */
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

  /**
   * @description Xóa 1 post
   * @param id id của post
   * @returns null || {}
   */
  deletePost(id: string) {
    const body = {
      params: {
        id: id
      }
    }
    return this.http.delete<any>(`${this.url}/${this.apiDelete}/${id}`, body)
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

  /**
   * @description Chỉnh sửa 1 post
   * @param body các thuộc tính implement theo interface
   * @returns null || {}
   */
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

  /**
   * @description Lấy thông tin 1 post
   * @param id id của post
   * @returns Trả về 1 post theo id
   */
  getOnePost(id: string) {
    const index = this.posts.findIndex(item => item.id == id);
    if (index == -1) return null;
    return this.posts[index];
  }

  /**
   * @description Hiển thị tất cả dữ liệu từ client (Không ở server)
   * @returns Danh sách post ở client
   */
  displayAll(): Observable<POST[]> {
    return this.postsSubject.asObservable();
  }

  /**
   * @description nạp dữ liệu từ server và đưa vào client
   * @returns null || {}
   */
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

  /**
   * @description Nếu có sự thay đổi dữ liệu thì gọi method này
   * @param posts implements theo interface có type là array
   * @returns mảng mới
   */
  private updateOnChangeData(posts: POST[]) {
    this.postsSubject.next(posts);
  }

  /**
   * Cảnh báo lỗi
   */
  notifyError() {
    window.alert('Oops! Error Network.');
  }

  /**
   * Thông báo thành công
   */
  notifySuccess() {
    window.alert('Done');
  }

  setLoaded(boolean: boolean) {
    this.loadedSubject.next(boolean);
  }
  getLoaded(): Observable<boolean> {
    return this.loadedSubject.asObservable();
  }

  // getShippingPrices() {
  //   return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json')
  // }


}
