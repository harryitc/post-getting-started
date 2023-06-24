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
    async refresh() {
        this.service.setLoaded(false);
        await this.service.fetchData();
        this.service.setLoaded(true);
    }
}