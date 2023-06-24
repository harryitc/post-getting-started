import { Component } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Router } from '@angular/router';

@Component({
    selector: 'post-create',
    templateUrl: './create.component.html',
})
export class CreateComponent {
    constructor(
        private service: PostService,
        private route: Router,
    ) { }
    title = '';
    body = '';
    async submit() {
        await this.service.addPost({ id: "", title: this.title, body: this.body }).catch(() => { this.service.notifyError() });
        this.back();
    }
    back() {
        this.route.navigate(['post']);
    }
}