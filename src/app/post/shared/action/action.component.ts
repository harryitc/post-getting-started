import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
    selector: 'post-action',
    templateUrl: './action.component.html',
    //   styleUrls: ['./create.component.scss']
})
export class ActionComponent {
    constructor(
        private route: Router,
        private service: PostService,
    ) { }
    @Input() id = '';
    update() {
        this.setId();
        this.route.navigate(['post/update']);
    }
    delete() {
        this.setId();
        // this.route.navigate(['post/dele']);
    }
    detail() {
        this.setId();
        this.route.navigate(['post/detail']);
    }
    setId() {
        this.service.setIdToGetOne(this.id);
    }
}