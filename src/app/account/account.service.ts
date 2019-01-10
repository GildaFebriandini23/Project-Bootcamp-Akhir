import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  dataEdit: Account = new Account();
  constructor(private httpClient:HttpClient) { }

  getList(){
    return this.httpClient.get('http://DESKTOP-SN96GDT:8080/accounts');
  }

  getById(id){
    return this.httpClient.get('http://DESKTOP-SN96GDT:8080/account/' + id);
  }

  update(account: Account){
    return this.httpClient.put('http://DESKTOP-NDBE2SG:3000/account', account);
  }

  // insert(account: Account){
  //   return this.httpClient.post('http://DESKTOP-NDBE2SG:7000/api/account', account);
  // }

  // delete(id){
  //   return this.httpClient.delete('http://DESKTOP-NDBE2SG:7000/api/account/' + id);
  // }

  login(account: Account){
    return this.httpClient.post('http://DESKTOP-SN96GDT:8080/login', account);
  }
}

