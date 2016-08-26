import { Routes, RouterModule } from '@angular/router';

import { WineListComponent } from './wine-list';
import { WineEditComponent } from './wine-edit';
import { WineTasteComponent } from './wine-taste';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/wine-list',
    pathMatch: 'full'
  },
  {
    path: 'wine-list',
    component: WineListComponent
  },
  {
    path: 'wine-edit/:id',
    component: WineEditComponent
  },
  {
    path: 'wine-taste/:id',
    component: WineTasteComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
