import { Injectable } from '@angular/core';
import { Spent } from './spent';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError, VirtualTimeScheduler } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { Origin } from './origin';
import {BehaviorSubject} from 'rxjs';
import { Convert } from './convert';


@Injectable({
  providedIn: 'root'
})
export class SpentService  {
  formDataSpent: Spent ;
  formDataOrigin:Origin;
  formDataConvert:Convert;
  list: Spent[];
  update:BehaviorSubject<boolean>;

  endpoint = 'live'
  access_key = 'f784c5a48ef7e39ed135eee0f9fcd837';
  convertUrl ='http://api.currencylayer.com/live?access_key=f784c5a48ef7e39ed135eee0f9fcd837&currencies=CHF,EUR,GBP'

  apiUrl ="https://mobile.ilucca-dev.net/api/expenseItems";
  euro=1
  USD=1.12
  GBP=1.15
  val=0.94
  cur="AUD,EUR,GBP,PLN"
  constructor( private httpClient:HttpClient) { }


  getConvert(){
     return this.httpClient.get(this.convertUrl);
  }
  

 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer 51543f1332d18b96b299a8743e33ee8911c99d87',
  })
};

getSpent(){
  return this.httpClient.get(this.apiUrl, this.httpOptions).
    pipe
    (catchError(this.handleError))
    }
    handleError(error:HttpErrorResponse){
      return throwError(error.message);
}

addSpent(formDataSpent:Spent){
  console.log(formDataSpent,'lobjet envoyé')
  return this.httpClient.post(this.apiUrl, formDataSpent, this.httpOptions)
}

updateSpent(id:any, data:Spent){
  console.log(this.apiUrl+'/'+id,'lurl modifié')
  console.log(data,'data modifié')

  return this.httpClient.put<Spent>(this.apiUrl+'/'+id, data, this.httpOptions)
  
}

deletSpent(id:string):Observable<Spent>{
  if(confirm("est vous sure de bien vouloir supprimer ?" )){
    return this.httpClient.delete<Spent>(this.apiUrl +'/'+id  ,this.httpOptions)

  }

}



/*
 taskkill /F /IM chrome.exe

start chrome https://teckangaroo.com/chrome-disable-web-security/ –disable-web-security –user-data-dir=”C:\teckangaroo.com”
*/
}
