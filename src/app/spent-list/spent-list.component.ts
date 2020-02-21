import { Component, OnInit } from '@angular/core';
import { SpentService } from '../shared/spent.service';
import { Spent } from '../shared/spent';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-spent-list',
  templateUrl: './spent-list.component.html',
  styleUrls: ['./spent-list.component.css']
})
export class SpentListComponent implements OnInit {
  list: Spent[];
  varia;
  tes;
  constructor(private service : SpentService, private firesotre: AngularFirestore ) { }

  ngOnInit(){
    this.service.getSpents().subscribe(data =>{
      this.list = data.map( e => {
        return {   
            id: e.payload.doc.id ,
           ...e.payload.doc.data() as Spent
        } 
      })
    });

    
  }
  onEdit(sp:Spent){
    this.service.formData=Object.assign({},sp);
    }
    onDelete(id:string){
      if(confirm("est vous sure de bien vouloir supprimer ?" )){
        this.firesotre.doc('spents/'+id).delete();
      }
    }
}
