import { Component, OnInit } from '@angular/core';
import { MdCard } from '@angular2-material/card';


@Component({
  selector: 'wine-card',
  templateUrl: 'wine-card.component.html',
  styleUrls: ['wine-card.component.css'],
  directives: [ MdCard ]
})
export class WineCardComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
