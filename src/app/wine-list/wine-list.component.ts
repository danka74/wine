import { Component, OnInit } from '@angular/core';
import { Wine } from '../wine';
import { WineCardComponent } from '../wine-card';
import { MdButton } from '@angular2-material/button';
import { WineService } from '../wine.service';


@Component({
  selector: 'wine-list',
  templateUrl: 'wine-list.component.html',
  styleUrls: ['wine-list.component.css'],
  directives: [ WineCardComponent ],
  providers: [ WineService ]
})
export class WineListComponent implements OnInit {
  errorMessage: string;
  wines: Wine[];

  constructor(private wineService:WineService) {
    this.wines = [ { name: "Chatå vadå", type: "Vitt", year: 1902, count: 4, location: "bottom"}, { name: "Tinto", type: "Rött", year: 2002, count: 5, location: "top"},
    { name: "Chatå vadå", type: "Vitt", year: 1902, count: 4, location: "bottom"}, { name: "Tinto", type: "Rött", year: 2002, count: 5, location: "top"} ];
    // this.wineService.getWines().subscribe(
    //   wines => this.wines = wines,
    //   error => this.errorMessage = error);

  }

  ngOnInit() {
  }

}
