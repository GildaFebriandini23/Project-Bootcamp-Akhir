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

  listAccount = [];
  showDetail: boolean = false;
  selectedAccount: Account = new Account();

  constructor(private accountService: AccountService, private router: Router) { }
  ngOnInit() {
    this.loadData();
  }

  loadData(){
    let id = sessionStorage.getItem('user');
    this.accountService.getById(id).subscribe((response)=>{
      this.listAccount = [response['values']];
      console.log(this.listAccount);
    })
  }

  selectAccount(account: Account){
    let copyAccount = new Account(); //let hanya berlaku di satu blok, car adalah variabel global
    copyAccount.accountId = account.accountId;
    copyAccount.nik = account.nik;
    copyAccount.name = account.name;
    copyAccount.gender = account.gender;
    copyAccount.birthDate = account.birthDate;
    copyAccount.address = account.address;
    copyAccount.phoneNumber = account.phoneNumber;
    copyAccount.balance = account.balance;
    copyAccount.status = account.status;
    copyAccount.accountNumber = account.accountNumber;
    this.selectedAccount= copyAccount;
    this.accountService.dataEdit = copyAccount;
    console.log(this.accountService.dataEdit);
    this.router.navigate(['account-form']);
  }

  prosesResult(result){
    if(result){
      this.showDetail=false;
    }
  }
}
