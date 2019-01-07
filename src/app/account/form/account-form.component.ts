import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  @Input()
  account: Account;

  @Output()
  result = new EventEmitter();

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
    this.updateData();
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
  this.accountService.update(account).subscribe(
    (response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
      location.href = '/account-list';
  },(err)=>{
    alert('error '+JSON.stringify(err));
  }
  );
}

updateData(){
  this.setDataToForm(this.account);
}

setDataToForm(account){
  if(account){
    this.accountFormGroup.controls['account_id'].setValue(this.account.account_id);
    this.accountFormGroup.controls['nik'].setValue(this.account.nik);
    this.accountFormGroup.controls['name'].setValue(this.account.name);
    this.accountFormGroup.controls['birth_date'].setValue(this.account.birth_date);
    this.accountFormGroup.controls['username'].setValue(this.account.username);
    this.accountFormGroup.controls['password'].setValue(this.account.password);
    this.accountFormGroup.controls['address'].setValue(this.account.address);
    this.accountFormGroup.controls['phone_number'].setValue(this.account.phone_number);
    this.accountFormGroup.controls['balance'].setValue(this.account.balance);
    this.accountFormGroup.controls['status'].setValue(this.account.status);
    this.accountFormGroup.controls['account_number'].setValue(this.account.account_number);
  }
}

insertData(){
  let account: Account = new Account();
  account.account_id = this.accountFormGroup.controls['account_id'].value;
  account.nik = this.accountFormGroup.controls['nik'].value;
  account.name= this.accountFormGroup.controls['name'].value;
  account.birth_date = this.accountFormGroup.controls['birth_date'].value;
  account.username = this.accountFormGroup.controls['username'].value;
  account.password = this.accountFormGroup.controls['password'].value;
  account.address = this.accountFormGroup.controls['address'].value;
  account.phone_number = this.accountFormGroup.controls['phone_number'].value;
  account.balance = this.accountFormGroup.controls['balance'].value;
  account.status = this.accountFormGroup.controls['status'].value;
  account.account_number = this.accountFormGroup.controls['account_number'].value;
  
  this.accountService.insert(account).subscribe(
    (response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
      location.href = '/account-list';
  },(err)=>{
    alert('error '+JSON.stringify(err));
  }
  );
}

cancelChanges(){
  this.result.emit(true);
}

}
