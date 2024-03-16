import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rendez'
})
export class RendezPipe implements PipeTransform {

  transform(tomb:any): any {
    if (!tomb) return null;
    tomb=tomb.sort(
      (a:any,b:any)=>{
        return b.mennyiseg-a.mennyiseg
      }
    )
    return tomb
  }

}
