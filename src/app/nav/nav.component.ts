import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CommonService} from '../service/common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public loggedIn: boolean;


  constructor(private commonService: CommonService, private router: Router) {
    if (!localStorage.getItem('loggedInUser')) {
      this.router.navigate(['/']);
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/']);
    this.loggedIn = false;
  }
}
