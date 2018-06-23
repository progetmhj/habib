import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

url:string="http://localhost:3000";
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  getcandidate() {
    return new Promise(resolve => {
      this.http.get(this.url+"all").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getlogin(email,password){
    return new Promise(resolve => {
      this.http.get(this.url+"/candidate"+"/login/"+email+"/"+password).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }
  getlogin1(email,password){
    return new Promise(resolve => {
      this.http.get(this.url+"/client"+"/byusandp/"+email+"/"+password).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }
  savecondidate(data) {

    console.log(data);
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'/candidate/ADD',(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


saveclient(data1) {
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'/client/ADD',(data1))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}


}
