import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../account/account';
import { AccountService } from '../account/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input()
  account: Account;

  
  @Output()
  result = new EventEmitter();

  listAccount = [];

  accountFormGroup: FormGroup;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder, private router : Router) { }

  ngOnInit() { //diinit pertama kali
    this.accountFormGroup = this.formBuilder.group({
      username: [''],
      password: [''],
    });
}

submitData(){
  let account: Account = new Account();
  account.username = this.accountFormGroup.controls['username'].value;
  account.password = this.accountFormGroup.controls['password'].value;
  console.log(account)
  this.accountService.login(account).subscribe(
    (response)=>{
      if(response['status'] == 200){
        this.accountService.getById = response['values'];
        alert('Sukses Login');
        sessionStorage.setItem('user', response['values']['accountId']);
        // this.router.navigate(['account-list']);
        location.href = 'account-list';
      } else if (response['status'] == 303) {
        alert('Not Confirmed !');
      } else if (response['status'] == 444){
        alert('Login Failed !');
      }
      console.log(response);
  },(err)=>{
    console.log('error'+err)
    alert('gagal');
  }
  );
}

cancelChanges(){
  this.result.emit(true);
}
}
