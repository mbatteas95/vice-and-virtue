import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 public rotate(toggle: string, dropdown: string): void {
    if (toggle !== 'collapsed') {
      document.getElementById(dropdown).setAttribute('class', 'tim-icons icon-minimal-down');
    } else {
      document.getElementById(dropdown).setAttribute('class', 'tim-icons icon-minimal-down rotate');
    }
  }
}
