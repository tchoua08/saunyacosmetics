import {Injectable} from '@angular/core';
import { isNullOrUndefined } from 'util';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    private fooSubject = new Subject<any>();
    navData: any;
    navaDataReservation: any;
    navUserCommande: any;

    publishSomeData(data: any) {
        this.fooSubject.next(data);
    }

    getObservable(): Subject<any> {
        return this.fooSubject;
    }

    getNavData(){
      if (isNullOrUndefined(this.navData)) { return 0; }
      return this.navData;
    }
    setNavData(navObj){
      this.navData = navObj;
    }


    getNavReservation(){
      if (isNullOrUndefined(this.navaDataReservation)) { return 0; }
      return this.navaDataReservation;
    }
    setNavReservation(navObj){
      this.navaDataReservation = navObj;
    }



    getNavUserCommande(){
      if (isNullOrUndefined(this.navUserCommande)) { return 0; }
      return this.navUserCommande;
    }
    setNavUserCommande(navObj){
      this.navUserCommande = navObj;
    }
}
