import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="http://localhost:3000/aruk/"
  arukRef:any
  private gyumiSub = new BehaviorSubject(null)
  constructor(private http:HttpClient, private db: AngularFireDatabase) {
    // this.loadGyumi()
    this.arukRef= db.list('/arukGyumi')
   }

   getAllFb(){
    return this.arukRef
   }
   getGyumiFb(id:any){
    return this.db.list("/arukGyumi/"+id)
   }

   postGyumiFb(gyumi:any){
    this.arukRef.push(gyumi)
   }

   updateGyumiFb(gyumi:any){
    let key= gyumi.id
    delete gyumi.id
    this.arukRef.update(key, gyumi)
   }

   deleteGyumiFb(gyumi:any){
    this.arukRef.remove(gyumi.id)
   }
  loadGyumi(){
    this.http.get(this.url).subscribe(
      (res:any)=>this.gyumiSub.next(res)
    )
  }

  getGyumik(){
    return this.gyumiSub
  }

  getGyumi(id:any){
    return this.http.get(this.url+id)
  }

  updateGyumi(gyumi:any){
    this.http.put(this.url+gyumi.id, gyumi).forEach(
      ()=>this.loadGyumi()
    )
  }
  deleteGyumi(gyumi:any){
    this.http.delete(this.url+gyumi.id).forEach(
      ()=>this.loadGyumi()
    )
  }
  postGyumi(gyumi:any){
    this.http.post(this.url,gyumi).forEach(
      ()=>this.loadGyumi()
    )
  }


}
