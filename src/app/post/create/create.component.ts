import { Component } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Router } from '@angular/router';

@Component({
    selector: 'post-create',
    templateUrl: './create.component.html',
    //   styleUrls: ['./create.component.scss']
})
export class CreateComponent {
    constructor(
        private service: PostService,
        private route: Router,
    ) { }
    title = '';
    body = '';
    submit() {
        this.service.addPost({ id: "", title: this.title, body: this.body }).catch(err => {
            this.service.notifyError();
        })
    }
    back() {
        this.route.navigate(['post']);
    }
}