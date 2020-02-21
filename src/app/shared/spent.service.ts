import { Injectable } from '@angular/core';
import { Spent } from './spent';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpentService {
  formData: Spent;
  endpoint = 'live'
  access_key = 'e98554b6362856e57e58f7dafbf8b4fe';
  baseUrl ='http://api.currencylayer.com/'
  constructor(private firestore : AngularFirestore, private httpClient:HttpClient) { }

  getSpents(){
    return this.firestore.collection('spents').snapshotChanges();
  }
  getNews(){
    return this.httpClient.get(this.baseUrl + this.endpoint + '?access_key='+ this.access_key);
  }

}
