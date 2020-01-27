import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MctComponent } from './mct/mct.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { TransferComponent} from './transfer/transfer.component';


const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'app', component: AppComponent},
  {path: 'account', component: AccountComponent},
  {path: 'transfer', component: TransferComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MctRoutingModule { }
