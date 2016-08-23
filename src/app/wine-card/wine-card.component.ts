import { Component, OnInit, Input } from '@angular/core';
import { MdCard } from '@angular2-material/card';
import { MdButton, MdButtonModule } from '@angular2-material/button';
import { Wine } from '../wine';


@Component({
  selector: 'wine-card',
  templateUrl: 'wine-card.component.html',
  styleUrls: ['wine-card.component.css'],
  directives: [ MdCard, MdButton ]
})
export class WineCardComponent implements OnInit {

  selected: boolean;

  @Input()
  wine: Wine;

  constructor() {
    this.selected = false;
  }

  ngOnInit() {
  }

  onSelect() {
    this.selected = ! this.selected;
    console.log(this.selected);
  }

}
