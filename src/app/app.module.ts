import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { MctComponent } from './mct/mct.component';
import {  RouterModule } from '@angular/router';
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
    MctRoutingModule,
    RouterModule.forRoot([
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@NgModule({
  declarations:[
    AppComponent,
  ],
  imports:[
    BrowserModule,
  ],
  providers:[
    
  ],
  bootstrap:[]
})

export class AppModule { }
