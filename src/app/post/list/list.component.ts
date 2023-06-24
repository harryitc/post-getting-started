import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { POST } from 'src/app/interface';
import { PostModel } from '../shared/post.model';

@Component({
    selector: 'post-list',
    templateUrl: './list.component.html',
    //   styleUrls: ['./create.component.scss']
})
export class ListComponent implements OnInit {
    constructor(
        private service: PostService,
    ) { }
    post: POST[] = [];
    loaded?: boolean;
    ngOnInit(): void {
        this.init();
        this.service.displayAll().subscribe(res => {
            this.post = [];
            // map data
            res.map(item => this.post.push(new PostModel(item).getResposne()));
        });
        this.service.getLoaded().subscribe(res => this.loaded = res);
    }

    init() {
        this.post = [];
    }
}