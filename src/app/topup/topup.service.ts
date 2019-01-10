import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topup } from './topup';

@Injectable({
  providedIn: 'root'
})
export class TopupService {

  constructor(private httpClient:HttpClient) { }

  getList(){
    return this.httpClient.get('http://DESKTOP-SN96GDT:8080/topups');
  }

  getById(id){
    return this.httpClient.get('http://DESKTOP-SN96GDT:8080/topup/' + id);
  }

  // update(topup: Topup){
  //   return this.httpClient.put('http://DESKTOP-NDBE2SG:7000/api/topup', topup);
  // }

  insert(topup: Topup){
    return this.httpClient.post('http://DESKTOP-NDBE2SG:3000/topup', topup);
  }

  // delete(id){
  //   return this.httpClient.delete('http://DESKTOP-NDBE2SG:7000/api/topup/' + id);
  // }

}

  
 