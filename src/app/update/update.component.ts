import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  oszlopok=[
    {key:"id", text:"#", type:"plain"},
    {key:"megnevezes", text:"Megnevezés", type:"text"},
    {key:"mennyiseg", text:"Mennyiség(kg)", type:"number"},
    {key:"lejar", text:"Lejárati idő", type:"date"},
  ]
  gyumi:any={}
  id:any=null
  constructor(private base:BaseService, private router:Router, private aroute:ActivatedRoute)
  {
    this.aroute.paramMap.subscribe(
      (params)=>{
        this.id=params.get('id')
        console.log(this.id)
        if (this.id)
        // this.base.getGyumi(this.id).subscribe(
        //   (res)=>this.gyumi=res
        // )
        this.base.getAllFb().snapshotChanges().pipe(
          map(
            (changes:any)=> changes.map(
              (c:any)=>({id:c.payload.key, ...c.payload.val()})
            )
          )
        ).subscribe(
            (res:any)=> this.gyumi=res.filter(
              (e:any)=>e.id==this.id 
            )[0]
          )
      }
    )
  }

  hozzaadas(){
    // if (!this.id) this.base.postGyumi(this.gyumi)
    // else this.base.updateGyumi(this.gyumi)
    if (!this.id) this.base.postGyumiFb(this.gyumi)
    else this.base.updateGyumiFb(this.gyumi)
    this.gyumi={}
    this.router.navigate(['/list'])
  }
}
