import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
      : Observable<boolean> | Promise<boolean> | boolean {
        console.log('isLoggedIn : ');
        console.log(sessionStorage.getItem('user'));
        if(sessionStorage.getItem('user')) {
          return true;
        } 
        this.router.navigate(['login-form'])
      }    
}





