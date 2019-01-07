import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { AccountFormComponent } from '../form/account-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  @ViewChild('formAccount')
  formAccount: AccountFormComponent; //buat variabel untuk menghubungkan parent dan child

  listAccount: Account[] = [];
  showDetail: boolean = false;
  selectedAccount: Account = new Account();

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  selectAccount(account: Account){
    let copyAccount = new Account(); //let hanya berlaku di satu blok, car adalah variabel global
    copyAccount.account_id = account.account_id;
    copyAccount.nik = account.nik;
    copyAccount.name = account.name;
    copyAccount.birth_date = account.birth_date;
    copyAccount.username = account.username;
    copyAccount.password = account.password;
    copyAccount.address = account.address;
    copyAccount.phone_number = account.phone_number;
    copyAccount.balance = account.balance;
    copyAccount.status = account.status;
    copyAccount.account_number = account.account_number;
    this.selectedAccount= copyAccount;
    this.showDetail = true;
    this.formAccount.updateData();
  }

  loadData(){
    this.accountService.getList().subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        Object.assign(this.listAccount, response);
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
    );
  }

  delete(account_id){
    this.accountService.delete(account_id).subscribe(
      (response)=>{
        location.href = '/account-list';
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
    );
  }

  prosesResult(result){
    if(result){
      this.showDetail=false;
      this.loadData();
    }
  }
}
