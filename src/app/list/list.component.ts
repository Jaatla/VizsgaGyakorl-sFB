import { Component, OnDestroy } from '@angular/core';
import { BaseService } from '../base.service';
import { Subscription, map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnDestroy {
gyumik:any
feliratkozas= new Subscription()
ujGyumi:any={}
keresoSzo:any
oszlopok=[
  {key:"id", text:"#", type:"plain"},
  {key:"megnevezes", text:"Megnevezés", type:"text"},
  {key:"mennyiseg", text:"Mennyiség(kg)", type:"number"},
  {key:"lejar", text:"Lejárati idő", type:"date"},
]
constructor(private base:BaseService, private router:Router){
  // this.feliratkozas= this.base.getGyumik().subscribe(
  //   (res)=>this.gyumik=res
  // )
  this.base.getAllFb().snapshotChanges().pipe(
    map(
      (changes:any)=> changes.map(
        (c:any)=>({id:c.payload.key, ...c.payload.val()})
      )
    )
  ).subscribe(
      (res:any)=> this.gyumik=res
    )

}

ngOnDestroy(): void {
    if (this.feliratkozas) this.feliratkozas.unsubscribe()
}

// modositas(gyumi:any){
//   this.base.updateGyumi(gyumi)
// }
modositas(gyumi:any){
  this.router.navigate(['/update', gyumi.id])
}
torles(gyumi:any){
  // this.base.deleteGyumi(gyumi)
  this.base.deleteGyumiFb(gyumi)
}

// hozzaadas(){
//   this.base.postGyumi(this.ujGyumi)
//   this.ujGyumi={}
// }
hozzaadas(){
  // this.base.postGyumi(this.ujGyumi)
  this.base.postGyumiFb(this.ujGyumi)
  this.ujGyumi={}
}

ujHozzaadas(){
  this.router.navigate(['/update'])
}
}
