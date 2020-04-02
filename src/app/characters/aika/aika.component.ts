import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aika',
  templateUrl: './aika.component.html',
  styleUrls: ['./aika.component.scss']
})
export class AikaComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }
}
