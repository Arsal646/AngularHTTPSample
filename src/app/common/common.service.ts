import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIURLS } from './Urls';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http:HttpClient
  ) { }


  getList(){
//  const Token='Token 3c3d07949ba833e76120d51fedbffb6af0195e2c'
//  const header=new HttpHeaders({
//   'Authorization':Token,
//   'Content-Type':'application/json'
//  })
let parameter=new HttpParams()
parameter=parameter.set('status','2')
    return this.http.get(`${environment.serverUrl}${APIURLS.company}`,{params:parameter})


  }
}
