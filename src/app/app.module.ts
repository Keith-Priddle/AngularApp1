import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MctComponent } from './mct/mct.component';
import { Router, RouterModule } from '@angular/router';
import { MctRoutingModule } from './app-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { AccountComponent } from './account/account.component';
import { TransferComponent } from './transfer/transfer.component';


@NgModule({
  declarations: [
    AppComponent,
    MctComponent,
    HeroesComponent,
    AccountComponent,
    TransferComponent,
   
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    MctRoutingModule,
    RouterModule.forRoot([
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
