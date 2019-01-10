import { Component, OnInit, ViewChild } from '@angular/core';
import { TopupService } from '../topup.service';
import { Topup } from '../topup';
import { TopupFormComponent } from '../form/topup-form.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topup-list',
  templateUrl: './topup-list.component.html',
  styleUrls: ['./topup-list.component.css']
})
export class TopupListComponent implements OnInit {
  @ViewChild('formTopup')
  formTopup: TopupFormComponent; //buat variabel untuk menghubungkan parent dan child


  listTopup: Topup[] = [];
  showDetail: boolean = false;
  selectedTopup: Topup = new Topup();

  constructor(private topupService: TopupService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
        this.loadData();
  }

  selectTopup(topup: Topup){
    let copyTopup = new Topup(); //let hanya berlaku di satu blok, car adalah variabel global
    copyTopup.id = topup.id;
    copyTopup.amount = topup.amount;
    copyTopup.method = topup.method;
    copyTopup.accountId = topup.accountId;
    this.selectedTopup = copyTopup;
    this.showDetail = true;
  }

  loadData(){
    let id = sessionStorage.getItem('user');
    this.topupService.getById(id).subscribe((response)=>{
      this.listTopup = response['values'];
      console.log(this.listTopup);
    })
  }

  prosesResult(result){
    if(result){
      this.showDetail=false;
      this.loadData();
    }
  }


}
