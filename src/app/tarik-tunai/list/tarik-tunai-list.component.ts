import { Component, OnInit, ViewChild } from '@angular/core';
import { TarikTunaiService } from '../tarik-tunai.service';
import { TarikTunai } from '../tarik-tunai';
import { TarikTunaiFormComponent } from '../form/tarik-tunai-form.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarik-tunai-list',
  templateUrl: './tarik-tunai-list.component.html',
  styleUrls: ['./tarik-tunai-list.component.css']
})
export class TarikTunaiListComponent implements OnInit {
  @ViewChild('formTopup')
  formTarik: TarikTunaiFormComponent; //buat variabel untuk menghubungkan parent dan child


  listTarik: TarikTunai[] = [];
  showDetail: boolean = false;
  selectedTarik: TarikTunai = new TarikTunai();

  constructor(private tarikService: TarikTunaiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadData();
}

selectTarik(tarik: TarikTunai){
let copyTarik = new TarikTunai(); //let hanya berlaku di satu blok, car adalah variabel global
copyTarik.id = tarik.id;
copyTarik.amount = tarik.amount;
copyTarik.method = tarik.method;
copyTarik.accountId = tarik.accountId;
this.selectedTarik = copyTarik;
this.showDetail = true;
}

loadData(){
let id = sessionStorage.getItem('user');
this.tarikService.getById(id).subscribe((response)=>{
  this.listTarik = response['values'];
  console.log(this.listTarik);
})
}

prosesResult(result){
if(result){
  this.showDetail=false;
  this.loadData();
}
}
}
