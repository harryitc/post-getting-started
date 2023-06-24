import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as fs from 'fs';
@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
    constructor(
        private route: Router,
    ) { }
    ngOnInit(): void {
    }
    create() {
        this.route.navigate(['post/create']);
    }
}