import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TopupService } from '../topup.service';
import { Router } from '@angular/router';
import { Topup } from '../topup';
import { Account } from 'src/app/account/account';


@Component({
  selector: 'app-topup-form',
  templateUrl: './topup-form.component.html',
  styleUrls: ['./topup-form.component.css']
})
export class TopupFormComponent implements OnInit {
  closeResult: string;

  accountId : Object;

  topForm : FormGroup;

  @Output()
  result = new EventEmitter();
  code = 123;
  random = 1000 + sessionStorage.getItem('user');
  date = Date.now();
  generateNumber = (this.code+""+this.random+""+this.date);
  constructor(private fb: FormBuilder, private data :TopupService, private router : Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.topForm = this.fb.group({
      id:[''],
      amount : ['', Validators.required],
      method: ['', Validators.required],
      date: ['', Validators.required],
      accountId: ['', Validators.required]
    });
  }
  backList(){
    this.router.navigate(['account-list']);
  }
  insertData(content){
    let topup: Topup = new Topup();
    topup.id = this.topForm.controls['id'].value;
    topup.amount = this.topForm.controls['amount'].value;
    topup.method = this.topForm.controls['method'].value;
    topup.date = new Date();
    topup.accountId = sessionStorage.getItem('user');
    
    let account = new Account();
    account.accountId = sessionStorage.getItem('user');
    topup.account = account;

    this.data.insert(topup).subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        this.result.emit(true);
        this.open(content);
        // location.href = '/account-list';
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
    );
  }

  open(content) {
    this.modalService.open(content, {centered: true},).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
  cancelChanges(){
    location.href = '/topup-list';
  } 

}
