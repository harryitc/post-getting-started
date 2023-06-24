import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { POST } from 'src/app/interface';
import { Router } from '@angular/router';

@Component({
    selector: 'post-detail',
    templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
    public post: POST = {
        id: '',
        title: '',
        body: ''
    };

    constructor(
        private service: PostService,
        private router: Router,
    ) { }


    ngOnInit(): void {
        this.init();
        this.service.getIdToGetOne().subscribe(res => {
            this.post.id = res;
        })
        let data = this.service.getOnePost(this.post.id);
        if (data != null) { this.post = data };
    }

    back() {
        this.router.navigate(['post']);
    }

    init() {
        this.post.id = '';
        this.post.title = '';
        this.post.body = '';
    }
}