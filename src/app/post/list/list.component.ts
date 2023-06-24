import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { POST } from 'src/app/interface';

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
    ngOnInit(): void {
        this.init();
        this.service.displayAll().subscribe(res => this.post = res);
    }

    init() {
        this.post = [];
    }
}