import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PhotoPlaceComponent } from './photo-place/photo-place.component';
import {FormsModule} from "@angular/forms";
import { FormSenderComponent } from './form-sender/form-sender.component';
import { TaskComponent } from './task/task.component';
import { TaskCheckComponent } from './task/task-check/task-check.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    PostFormComponent,
    PhotoPlaceComponent,
    FormSenderComponent,
    TaskComponent,
    TaskCheckComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
