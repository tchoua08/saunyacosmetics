import { Component, OnInit } from '@angular/core';
import {CarnetAdresse} from '../../store/models/carnetAdresse.model';
import {CarnetAdresseState} from '../../../app/carnetAdresse.state';
import {AddCarnetAdresse, DeleteCarnetAdresse, GetCarnetAdresses, SetSelectedCarnetAdresse} from '../../../app/store/actions/carnetAdresse.action';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { NavService } from 'src/app/nav.service';

@Component({
  selector: 'app-carnetadresse',
  templateUrl: './carnetadresse.page.html',
  styleUrls: ['./carnetadresse.page.scss'],
})
export class CarnetadressePage implements OnInit {

  @Select(CarnetAdresseState.getCarnetAdresseList) carnetAdresses!: Observable<CarnetAdresse[]>;

  constructor( private navService: NavService,private store: Store, private route: Router) { }

  ngOnInit() {
  }


  btnEffacer(){

  }
  btnAjouter(){
    this.route.navigateByUrl('/tabs/profil/ajoutercarnetadresse', { replaceUrl: true });
  }
  btnModifier(){
    this.route.navigateByUrl('/tabs/profil/modifiercarnetadresse', { replaceUrl: true });
  }



}
