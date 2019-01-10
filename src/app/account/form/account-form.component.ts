import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private accountService: AccountService, private formBuilder: FormBuilder, private router: Router) { }

  setForm = this.accountService.dataEdit;

  ngOnInit() { //diinit pertama kali
    console.log(this.accountService.dataEdit);
    this.accountFormGroup = this.formBuilder.group({
      accountId:[''],
      nik: ['', Validators.required],
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      username: [''],
      password: [''],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      balance: ['', Validators.required],
      status:['', Validators.required],
      accountNumber: ['', Validators.required]
    });
     this.setDataToForm();   
}

submitData(){
  let account: Account = new Account();
  account.accountId = this.accountFormGroup.controls['accountId'].value;
  account.nik = this.accountFormGroup.controls['nik'].value;
  account.name = this.accountFormGroup.controls['name'].value;
  account.birthDate = this.accountFormGroup.controls['birthDate'].value;
  account.username = this.accountFormGroup.controls['username'].value;
  account.password = this.accountFormGroup.controls['password'].value;
  account.address = this.accountFormGroup.controls['address'].value;
  account.phoneNumber = this.accountFormGroup.controls['phoneNumber'].value;
  account.balance = this.accountFormGroup.controls['balance'].value;
  account.status = this.accountFormGroup.controls['status'].value;
  account.accountNumber = this.accountFormGroup.controls['accountNumber'].value;
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

setDataToForm(){
    this.accountFormGroup.controls['accountId'].setValue(this.setForm.accountId);
    this.accountFormGroup.controls['nik'].setValue(this.setForm.nik);
    this.accountFormGroup.controls['name'].setValue(this.setForm.name);
    if(this.setForm.name == null){
      this.router.navigate(['account-list']);
     }
    this.accountFormGroup.controls['birthDate'].setValue(this.setForm.birthDate);
    this.accountFormGroup.controls['username'].setValue(this.setForm.username);
    this.accountFormGroup.controls['password'].setValue(this.setForm.password);
    this.accountFormGroup.controls['address'].setValue(this.setForm.address);
    this.accountFormGroup.controls['phoneNumber'].setValue(this.setForm.phoneNumber);
    this.accountFormGroup.controls['balance'].setValue(this.setForm.balance);
    this.accountFormGroup.controls['status'].setValue(this.setForm.status);
    this.accountFormGroup.controls['accountNumber'].setValue(this.setForm.accountNumber);
}

cancelChanges(){
  this.result.emit(true);
  location.href = '/account-list';
}
}
