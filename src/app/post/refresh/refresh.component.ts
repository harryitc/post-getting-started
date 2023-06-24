import { Component } from '@angular/core';
import { PostService } from '../shared/post.service';

@Component({
    selector: 'post-refresh',
    templateUrl: './refresh.component.html',
})
export class RefreshComponent {
    constructor(
        private service: PostService,
    ) { }
    refresh() {
        this.service.fetchData().catch(err => {
            this.service.notifyError();
        })
    }
}