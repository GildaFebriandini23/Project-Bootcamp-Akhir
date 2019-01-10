import { Component, OnInit, ViewChild } from '@angular/core';
import { TransferService } from '../transfer.service';
import { Transfer } from '../transfer';
import { TransferFormComponent } from '../form/transfer-form.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {
  @ViewChild('formTransfer')
  formTransfer: TransferFormComponent; //buat variabel untuk menghubungkan parent dan child


  listTransfer: Transfer[] = [];
  showDetail: boolean = false;
  selectedTransfer: Transfer = new Transfer();

  constructor(private transferService: TransferService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadData();
}

selectTransfer(transfer: Transfer){
let copyTransfer = new Transfer(); //let hanya berlaku di satu blok, car adalah variabel global
copyTransfer.transferId = transfer.transferId;
copyTransfer.nameBank = transfer.nameBank;
copyTransfer.recepient = transfer.recepient;
copyTransfer.amount = transfer.amount;
copyTransfer.date = transfer.date;
copyTransfer.accountId = transfer.accountId;
this.selectedTransfer = copyTransfer;
this.showDetail = true;
}

loadData(){
let id = sessionStorage.getItem('user');
this.transferService.getById(id).subscribe((response)=>{
  console.log(response);
  console.log(sessionStorage.getItem('user'));
  this.listTransfer= response['values'];
  console.log(this.listTransfer);
})
}

prosesResult(result){
if(result){
  this.showDetail=false;
  this.loadData();
}
}

}
