import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './shared/post.service';
// import * as fs from 'fs';
@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
    constructor(
        private route: Router,
        private service: PostService,
    ) { }
    ngOnInit(): void {
        this.service.fetchData();
    }
    create() {
        this.route.navigate(['post/create']);
    }
}