import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './shared/post.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    //   styleUrls: ['./create.component.scss']
})
export class PostComponent {
    constructor(
        private route: Router,
        private service: PostService,
    ) { }

    create() {
        this.route.navigate(['post/create']);
    }
    refresh() {
        this.service.fetchData().catch(err => {
            this.service.notifyError();
        })
    }

}