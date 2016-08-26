import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { MdButtonModule } from '@angular2-material/button/button';
import { MdCardModule } from '@angular2-material/card/card';
import { MdIconModule } from '@angular2-material/icon/icon';
// import { MdRippleModule } from '@angular2-material/core/ripple/ripple';
// import {PortalModule} from '@angular2-material/core/portal/portal-directives';
// import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
import { routing } from './app.routing';
import { WineEditComponent } from './wine-edit';
import { WineListComponent } from './wine-list';
import { WineTasteComponent } from './wine-taste';

@NgModule({
  declarations: [
    AppComponent,
    WineListComponent,
    WineEditComponent,
    WineTasteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    routing
    //MdRippleModule, PortalModule, OverlayModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
