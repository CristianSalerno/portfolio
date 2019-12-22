import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [trigger('fade', [
    transition('void => *', [
      style({ opacity: .5 }),
      animate(3000, style({ opacity: 1 })),
    ]),
  ])],
})
export class HeroComponent implements OnInit {

  arrItems: any[];
  constructor() {
    this.arrItems = new Array(["Projects", "Experience", "Github", "Contact"])
  }

  ngOnInit() {
    AOS.init();
  }

}
