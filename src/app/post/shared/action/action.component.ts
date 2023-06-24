import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'post-action',
    templateUrl: './action.component.html',
    //   styleUrls: ['./create.component.scss']
})
export class ActionComponent {
    constructor(
        private route: Router,
    ) { }
    update() {
        this.route.navigate(['post/create']);
    }
    delete() {
        this.route.navigate(['post/create']);
    }
    detail() {
        this.route.navigate(['post/create']);
    }
}