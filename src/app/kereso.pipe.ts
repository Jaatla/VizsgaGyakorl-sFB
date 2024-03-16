import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kereso'
})
export class KeresoPipe implements PipeTransform {

  transform(tomb:any, szo:any):any {
    if (!tomb) return null;
    if (!szo) return tomb

    tomb= tomb.filter(
      (a:any)=> a.megnevezes.toLowerCase().includes(szo.toLowerCase())
    )
    return tomb
  }

}
