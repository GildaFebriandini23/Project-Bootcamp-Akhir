import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TarikTunaiService } from '../tarik-tunai.service';
import { Router } from '@angular/router';
import { TarikTunai } from '../tarik-tunai';
import { Account } from 'src/app/account/account';

@Component({
  selector: 'app-tarik-tunai-form',
  templateUrl: './tarik-tunai-form.component.html',
  styleUrls: ['./tarik-tunai-form.component.css']
})
export class TarikTunaiFormComponent implements OnInit {

  closeResult: string;

  accountId : Object;

  tarikForm : FormGroup;

  @Output()
  result = new EventEmitter();
  code = 123;
  random = 1000 + sessionStorage.getItem('user');
  date = Date.now();
  generateNumber = (this.code+""+this.random+""+this.date);
  constructor(private fb: FormBuilder, private data :TarikTunaiService, private router : Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.tarikForm = this.fb.group({
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
    let tarik: TarikTunai = new TarikTunai();
    tarik.id = this.tarikForm.controls['id'].value;
    tarik.amount = this.tarikForm.controls['amount'].value;
    tarik.method = this.tarikForm.controls['method'].value;
    tarik.date = new Date();
    tarik.accountId = sessionStorage.getItem('user');
    
    let account = new Account();
    account.accountId = sessionStorage.getItem('user');
    tarik.account = account;

    this.data.insert(tarik).subscribe(
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
    location.href = '/tarik-tunai-list';
  } 

}
 