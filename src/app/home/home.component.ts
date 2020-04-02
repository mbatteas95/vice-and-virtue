import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class HomeComponent implements OnInit {

  public typewriterText = 'the holes we\'ve left';
  public typewriterDisplay = '';

  constructor() { }

  ngOnInit(): void {
    this.typingCallback(this);
  }

  private typingCallback(that) {
    const totalLength = that.typewriterText.length;
    const currentLength = that.typewriterDisplay.length;
    if (currentLength < totalLength) {
      that.typewriterDisplay += that.typewriterText[currentLength];
    } else {
      that.typewriterDisplay = '';
    }
    setTimeout(that.typingCallback, 100, that);
  }

}
