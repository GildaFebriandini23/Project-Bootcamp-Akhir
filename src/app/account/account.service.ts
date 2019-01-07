import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  getList(){
    return this.httpClient.get('http://192.168.1.28:3000/accounts');
  }

  update(account: Account){
    return this.httpClient.put('http://192.168.1.28:3000/account', account);
  }

  insert(account: Account){
    return this.httpClient.post('http://192.168.1.28:3000/account', account);
  }

  delete(id){
    return this.httpClient.delete('http://192.168.1.28:3000/account/' + id);
  }

  login(account: Account){
    return this.httpClient.post('http://192.168.1.21:3000/login', account);
  }
}

