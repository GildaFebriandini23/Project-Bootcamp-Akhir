import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login-form.component';
import { HomeComponentComponent } from './home/home-component.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TopupListComponent } from './topup/list/topup-list.component';
import { TopupFormComponent } from './topup/form/topup-form.component';
import { TransferFormComponent } from './transfer/form/transfer-form.component';
import { TransferListComponent } from './transfer/list/transfer-list.component';
import { AccountListComponent } from './account/list/account-list.component';
import { AccountFormComponent } from './account/form/account-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TarikTunaiListComponent } from './tarik-tunai/list/tarik-tunai-list.component';
import { TarikTunaiFormComponent } from './tarik-tunai/form/tarik-tunai-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponentComponent,
    AboutComponent,
    ContactComponent,
    TopupListComponent,
    TopupFormComponent,
    TransferFormComponent,
    TransferListComponent,
    AccountListComponent,
    AccountFormComponent,
    NavbarComponent,
    TarikTunaiListComponent,
    TarikTunaiFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
