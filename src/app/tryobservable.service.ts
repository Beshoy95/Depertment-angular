import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TryobservableService {
  
  myfunc(){
  return new Observable(a=>{
     setTimeout(() => {
       a.next(10)
     }, 1000);

     setTimeout(() => {
      a.next(20)
    }, 5000);

    setTimeout(() => {
      a.complete()
    }, 7000);

    setTimeout(() => {
      a.next(30)
    }, 11000);

    })
  }

  constructor() { }
}
