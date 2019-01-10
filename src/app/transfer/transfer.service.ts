import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from './transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient:HttpClient) { }

  getList(){
    return this.httpClient.get('http://DESKTOP-SN96GDT:8080/transfers');
  }

  getById(id){
    return this.httpClient.get('http://DESKTOP-SN96GDT:8080/transfer/' + id);
  }

  // update(transfer: Transfer){
  //   return this.httpClient.put('http://DESKTOP-NDBE2SG:7000/api/transfer', transfer);
  // }

  insert(transfer: Transfer){
    return this.httpClient.post('http://DESKTOP-NDBE2SG:3000/transfer', transfer);
  }

  // delete(id){
  //   return this.httpClient.delete('http://DESKTOP-NDBE2SG:7000/api/transfer/' + id);
  // }

}

  
 