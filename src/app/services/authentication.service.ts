import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient:HttpClient) {

  }

  authenticateUser(data) {
    //data which user has used during log in
    return this.httpClient.post('http://localhost:3000/auth/v1',data);

  }

  setBearerToken(token:string) {
    localStorage.setItem('authToken',token);

  }

  getBearerToken() {
    return localStorage.getItem('authToken');

  }

  //   isUserAuthenticated(token:string){
  //     return this.httpClient.post('http://localhost:3000/auth/v1/isAuthenticated',{},{
  //       headers:new HttpHeaders().set('Authorization','Bearer ${token}')
  //     }).map(response=>response['isAuthenticated']).toPromise();

  //  }
  isUserAuthenticated(token:string): Promise<boolean> {
    let bearer="Bearer "+token;
    return this.httpClient.post<any>('http://localhost:3000/auth/v1/isAuthenticated',{},{
      headers: new HttpHeaders().set('Authorization',bearer)
    }).map(response=>response['isAuthenticated']).toPromise();
 }
}
