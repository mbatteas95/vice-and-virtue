import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {AddPostService} from './add-post.service';
import {Post} from '../models/post.model';
import {CommonService} from '../service/common.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers: [AddPostService]
})
export class AddPostComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  public post: Post;

  constructor(private addPostService: AddPostService, private commonService: CommonService) {
    this.post = new Post();
  }

  public Editor = ClassicEditor;


  ngOnInit() {
    this.commonService.postEdit_Observable.subscribe(res => {
      this.post = this.commonService.post_to_be_edited;
    });
  }

  addPost() {
    if (this.post.title && this.post.description) {
      if (this.post._id) {
        this.addPostService.updatePost(this.post).subscribe(res => {
          this.closeBtn.nativeElement.click();
          this.commonService.notifyPostAddition();
        });
      } else {
        this.addPostService.addPost(this.post).subscribe(res => {
          this.closeBtn.nativeElement.click();
          this.commonService.notifyPostAddition();
        });
      }
    } else {
      alert('Title and Description required');
    }
  }
}
