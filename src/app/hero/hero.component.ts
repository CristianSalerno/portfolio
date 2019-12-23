import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [trigger('fade', [
    transition('void => *', [
      style({ opacity: .5 }),
      animate(2000, style({ opacity: 1 })),
    ]),
  ])],
})
export class HeroComponent implements OnInit {

  arrItems: any[];

  constructor(private router: Router) {
    this.arrItems = new Array(["Projects", "Skills", "Github", "Contact"])
  }

  ngOnInit() {
    AOS.init()
  }


  scroll() {
    setTimeout(() => {
      window.scrollTo({
        top: 700,
        behavior: 'smooth',
      })
    }, 1000)
  }
}
