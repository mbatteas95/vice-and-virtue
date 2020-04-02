import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-akio',
  templateUrl: './akio.component.html',
  styleUrls: ['./akio.component.scss']
})
export class AkioComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }
}
