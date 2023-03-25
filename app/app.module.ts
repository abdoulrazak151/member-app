import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { MembreComponent } from './membre/membre.component';
import { MembreViewComponent } from './membre-view/membre-view.component';
import { MembreOkComponent } from './membre-ok/membre-ok.component';
import { MembreNokComponent } from './membre-nok/membre-nok.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path: "membres", component: MembreViewComponent },
  {path: "membres-enforme", component: MembreOkComponent },
  {path: "membres-malade", component: MembreNokComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MembreComponent,
    MembreViewComponent,
    MembreOkComponent,
    MembreNokComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
