import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoryComponent } from './story/story.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import {CommonService} from './service/common.service';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {SafeHtmlPipe} from './show-post/safeHtml.pipe';
import {CharactersComponent} from './characters/characters.component';
import {HaruhiComponent} from './characters/haruhi/haruhi.component';
import {AikaComponent} from './characters/aika/aika.component';
import {HaruComponent} from './characters/haru/haru.component';
import {AkioComponent} from './characters/akio/akio.component';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {ArchiveComponent} from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoryComponent,
    ShowPostComponent,
    AddPostComponent,
    NavComponent,
    HomeComponent,
    CharactersComponent,
    AkioComponent,
    HaruhiComponent,
    AikaComponent,
    HaruComponent,
    ArchiveComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
