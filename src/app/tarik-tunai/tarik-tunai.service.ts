import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TarikTunai } from './tarik-tunai';

@Injectable({
  providedIn: 'root'
})
export class TarikTunaiService {

  constructor(private httpClient:HttpClient) { }

  getList(){
    return this.httpClient.get('http://DESKTOP-NDBE2SG:3000/withdraws');
  }

  getById(id){
    return this.httpClient.get('http://DESKTOP-NDBE2SG:3000/withdraw/' + id);
  }

  // update(tarik: TarikTunai){
  //   return this.httpClient.put('http://DESKTOP-NDBE2SG:3000/withdraw', tarik);
  // }

  insert(tarik: TarikTunai){
    return this.httpClient.post('http://DESKTOP-NDBE2SG:3000/withdraw', tarik);
  }

}

  
 