import { Component, OnInit } from '@angular/core';
import { Wine } from '../wine';
import { MdCard } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { MdContent } from '@angular2-material/core';
import { WineService } from '../wine.service';


@Component({
  selector: 'wine-list',
  templateUrl: 'wine-list.component.html',
  styleUrls: ['wine-list.component.css'],
  directives: [ MdCard ],
  providers: [ WineService ]
})
export class WineListComponent implements OnInit {
  errorMessage: string;
  wines:Wine[];

  constructor(private wineService:WineService) {
    this.wines = [ { name: "vin1"}, { name: "vin2"}];
    // this.wineService.getWines().subscribe(
    //   wines => this.wines = wines,
    //   error => this.errorMessage = error);

  }

  ngOnInit() {
  }

}
