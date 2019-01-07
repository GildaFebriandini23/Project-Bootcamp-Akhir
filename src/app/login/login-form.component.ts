import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../account/account';
import { AccountService } from '../account/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private accountService: AccountService, private formBuilder: FormBuilder) { }

  ngOnInit() { //diinit pertama kali
    this.accountFormGroup = this.formBuilder.group({
      account_id:[''],
      nik: ['', Validators.required],
      name: ['', Validators.required],
      birth_date: ['', Validators.required],
      username: [''],
      password: [''],
      address: ['', Validators.required],
      phone_number: ['', Validators.required],
      balance: ['', Validators.required],
      status:['', Validators.required],
      account_number: ['', Validators.required]
    });
}



submitData(){
  let account: Account = new Account();
  account.account_id = this.accountFormGroup.controls['account_id'].value;
  account.nik = this.accountFormGroup.controls['nik'].value;
  account.name = this.accountFormGroup.controls['name'].value;
  account.birth_date = this.accountFormGroup.controls['birth_date'].value;
  account.username = this.accountFormGroup.controls['username'].value;
  account.password = this.accountFormGroup.controls['password'].value;
  account.address = this.accountFormGroup.controls['address'].value;
  account.phone_number = this.accountFormGroup.controls['phone_number'].value;
  account.balance = this.accountFormGroup.controls['balance'].value;
  account.status = this.accountFormGroup.controls['status'].value;
  account.account_number = this.accountFormGroup.controls['account_number'].value;
  console.log(account)
  this.accountService.login(account).subscribe(
    (response)=>{
      if(response['status'] == 200){
        alert('Sukses Login');
      } else {
        alert ('Login Gagal');
      }
      console.log(response['status']);
  },(err)=>{
    console.log('error'+err)
    alert('gagal');   ``

  }
  );
}

cancelChanges(){
  this.result.emit(true);
}

}
