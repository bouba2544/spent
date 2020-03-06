import { Component, OnInit, Input } from '@angular/core';
import { SpentService } from '../shared/spent.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spents',
  templateUrl: './spents.component.html',
  styleUrls: ['./spents.component.css']
})
export class SpentsComponent implements OnInit {
  currencyDefault = 'EUR';
  currencyConvert ='EUR'
  spentForm:FormGroup;
  spentFormOrigin:FormGroup;
  spentFormConvert:FormGroup;
  
  constructor(public service: SpentService, public router:Router) { }
 
  
  ngOnInit(): void {
   this.resetForm();
  this.spentForm=new FormGroup({
    purchasedOn:new FormControl(),
    nature:new FormControl(),
    comment:new FormControl(),
    originalAmount:this.spentFormOrigin=new FormGroup({
      amount:new FormControl(),
      currency:new FormControl(),
    }),
    convertedAmount:this.spentFormConvert=new FormGroup({
      amount:new FormControl(),
      currency:new FormControl()
    })
  })
 
  }
  onGetSpent(){
    console.log('test');
  }
  resetForm (form?:any){
    if(form!=null)
    form.resetForm();
    this.service.formDataSpent={
    id:'',
    purchasedOn:null,
    nature:null,
    comment:null,
    originalAmount:this.service.formDataOrigin={
      amount:null,
      currency:null},
      convertedAmount:this.service.formDataConvert={
      amount:null,
      currency:null
    }}
  }
  


  onSubmit(form:any){
        let data = Object.assign({},form.value);
        console.log(this.service.formDataSpent.id,"id avant supp")

        if(this.service.formDataSpent.id!==''){
          this.service.updateSpent(this.service.formDataSpent.id, data).subscribe()
          window.location.reload();
          console.log(form.value,"element modifié")
        }
        else
        {
          this.insertSpent(form);
            console.log(form.value,"element ajouté")
        }
  }
latest:any
  insertSpent(form:any){
    console.log(form,'contenu formulaire form')
     this.service.addSpent(form.value).subscribe()
     window.location.reload();
           
    }

}

