import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {LoginService} from './login.service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {
  @Output() loggedIn = new EventEmitter<boolean>();
  public user: User;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(private loginService: LoginService) {
    this.user = new User();
  }

  validateLogin() {
    if (this.user.username && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(result => {
        if (result.status === 'success') {
          localStorage.setItem('loggedInUser', this.user.username);
          this.loggedIn.emit(true);
          this.closeBtn.nativeElement.click();
        } else {
          alert('Wrong username password');
        }
      }, error => {
        console.log('error is ', error);
      });
    } else {
      alert('enter user name and password');
    }
  }
}
