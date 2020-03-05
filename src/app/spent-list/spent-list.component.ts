import { Component, OnInit } from '@angular/core';
import { SpentService } from '../shared/spent.service';
import { Spent } from '../shared/spent';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-spent-list',
  templateUrl: './spent-list.component.html',
  styleUrls: ['./spent-list.component.css']
})
export class SpentListComponent implements OnInit {
  list: Spent[];
  errorMessage: string;
  update:BehaviorSubject<boolean>;
  tes:any
  p: number = 1;
  collection = [];

  constructor(private service : SpentService,private httpClient:HttpClient) { 

  
}

  ngOnInit(){
    this.service.refreshList();
    this.service.getSpent().subscribe((data:any)=>{this.list=data.items})
    this.service.getConvert().subscribe(dat=>{
      this.tes=dat
      console.log(this.tes,"le retour de convert")
    });

  }

  onDelete(id:string){
    this.service.deletSpent(id).subscribe(data=>{
      this.service.getSpent();
    },err=>{
      console.log(err)
    });

      this.service.refreshList()
      
    
    }
  onEdit(sp:Spent){
    this.service.formDataSpent=Object.assign({},sp);
    this.service.formDataOrigin=Object.assign({},sp.originalAmount);
    this.service.formDataConvert=Object.assign({},sp.convertedAmount);
    }
  
}
