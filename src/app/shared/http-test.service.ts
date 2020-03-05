// http-test.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpTestService {

  constructor(private http: HttpClient) { }


}
