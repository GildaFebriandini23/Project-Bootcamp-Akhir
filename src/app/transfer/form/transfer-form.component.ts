import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransferService } from '../transfer.service';
import { Router } from '@angular/router';
import { Transfer } from '../transfer';
import { Account } from 'src/app/account/account';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit {
  accountId : Object;

  trForm : FormGroup;

  @Output()
  result = new EventEmitter();

  constructor(private fb: FormBuilder, private data :TransferService, private router : Router) { }

  ngOnInit() {
    this.trForm = this.fb.group({
      transferId:[''],
      nameBank : ['', Validators.required],
      recepient: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required],
      accountId: ['', Validators.required]
    });
  }

  insertData(){
    let transfer: Transfer = new Transfer();
    // transfer.transferId = this.trForm.controls['transferId'].value;
    transfer.nameBank = this.trForm.controls['nameBank'].value;
    transfer.recepient = this.trForm.controls['recepient'].value;
    transfer.amount = this.trForm.controls['amount'].value;
    transfer.date = new Date();
    transfer.accountId = sessionStorage.getItem('user');
    let account = new Account();
    account.accountId = sessionStorage.getItem('user');
    transfer.account = account;

    this.data.insert(transfer).subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        this.result.emit(true);
        location.href = '/transfer-list';
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
    );
  }

  cancelChanges(){
    location.href = '/transfer-list';
  } 


}
