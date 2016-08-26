import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MdCard } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
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

  constructor(private router: Router) {
    this.selected = false;
  }

  ngOnInit() {
  }

  onSelect() {
    this.selected = ! this.selected;
    console.log(this.selected);
  }

  onClickButton(path: string) {
    let link = [ path, this.wine.id ];
    console.log(link);
    this.router.navigate(link);
  }

}
