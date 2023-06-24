import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PostService } from './shared/post.service';
import { PostComponent } from './post.component';
import { HeaderComponent } from './header/header.component';
import { ActionComponent } from './shared/action/action.component';
import { DetailComponent } from './shared/action/detail/detail.component';
import { UpdateComponent } from './shared/action/update/update.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        PostComponent,
        HeaderComponent,
        ActionComponent,
        DetailComponent,
        UpdateComponent,
        CreateComponent,
        ListComponent,
    ],
    providers: [
        PostService,
    ],
    exports: [
        PostComponent,
        HeaderComponent,
        ActionComponent,
        DetailComponent,
        UpdateComponent,
        CreateComponent,
        ListComponent,
    ]
})

export class PostModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/