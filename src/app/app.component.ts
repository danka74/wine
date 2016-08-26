import { Component } from '@angular/core';
import { WineListComponent } from './wine-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ WineListComponent ]
})
export class AppComponent {
  title = 'app works!';
}
