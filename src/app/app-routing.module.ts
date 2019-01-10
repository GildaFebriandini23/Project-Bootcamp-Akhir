import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login/login-form.component';
import { HomeComponentComponent } from './home/home-component.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AccountListComponent } from './account/list/account-list.component';
import { AccountFormComponent } from './account/form/account-form.component';
import { TransferListComponent } from './transfer/list/transfer-list.component';
import { TransferFormComponent } from './transfer/form/transfer-form.component';
import { TopupListComponent } from './topup/list/topup-list.component';
import { TopupFormComponent } from './topup/form/topup-form.component';
import { AuthGuardService } from './service/auth-guard.service';
import { TarikTunaiListComponent } from './tarik-tunai/list/tarik-tunai-list.component';
import { TarikTunaiFormComponent } from './tarik-tunai/form/tarik-tunai-form.component';

const routes: Routes = [
  {
    path:'login-form',
    component: LoginFormComponent
  },
  {
    path:'home-component',
    component: HomeComponentComponent
  },
  {
    path:'',
    component: HomeComponentComponent
  },
  {
    path:'about-page',
    component: AboutComponent
  },
  {
    path:'contact-page',
    component: ContactComponent
  },
  {
    path:'account-list',
    component: AccountListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'account-form',
    component: AccountFormComponent
  },
  {
    path:'transfer-list',
    component: TransferListComponent
  },
  {
    path:'transfer-form',
    component: TransferFormComponent
  },
  {
    path:'topup-list',
    component: TopupListComponent
  },
  {
    path:'topup-form',
    component: TopupFormComponent
  },
  {
    path:'tarik-tunai-list',
    component: TarikTunaiListComponent
  },
  {
    path:'tarik-tunai-form',
    component: TarikTunaiFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
