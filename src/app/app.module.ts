import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login-form.component';
import { HomeComponentComponent } from './home/home-component.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryListComponent } from './history/history-list.component';
import { TopupListComponent } from './topup/list/topup-list.component';
import { TopupFormComponent } from './topup/form/topup-form.component';
import { TransferFormComponent } from './transfer/form/transfer-form.component';
import { TransferListComponent } from './transfer/list/transfer-list.component';
import { AccountListComponent } from './account/list/account-list.component';
import { AccountFormComponent } from './account/form/account-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponentComponent,
    AboutComponent,
    ContactComponent,
    HistoryListComponent,
    TopupListComponent,
    TopupFormComponent,
    TransferFormComponent,
    TransferListComponent,
    AccountListComponent,
    AccountFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
