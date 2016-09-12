import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription }       from 'rxjs/Subscription';

@Component({
  selector: 'wine-edit',
  templateUrl: 'wine-edit.component.html',
  styleUrls: ['wine-edit.component.css']
})
export class WineEditComponent implements OnInit {

  private sub: Subscription;

  constructor(
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      console.log(id);
      //this.service.getHero(id).then(hero => this.hero = hero);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
