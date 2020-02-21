import { Component, OnInit } from '@angular/core';
import { SpentService } from '../shared/spent.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Spent } from '../shared/spent';

@Component({
  selector: 'app-spents',
  templateUrl: './spents.component.html',
  styleUrls: ['./spents.component.css']
})
export class SpentsComponent implements OnInit {

  constructor(public service: SpentService, private firesotre: AngularFirestore) { }

  ngOnInit(): void {
    this.resetForm();
  }
  onGetSpent(){
    console.log('test');
  }
  resetForm (form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData={
      id:null,
      name:'',
      price:null,
      date:null
    }
  }
  onSubmit(form:NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null){
    this.firesotre.collection('spents').add(data);

  }
    else
    
    this.firesotre.doc('spents/' + form.value.id).update(data);
    this.resetForm(form);

  }

  }

