import { Component, OnInit,ViewChild  } from '@angular/core';
import {AppService} from '../../app/app.service';
import * as _ from 'lodash';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import {Categorie} from '../../app/store/models/categorie.model';
import { IonInfiniteScroll } from '@ionic/angular';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';

import {User} from '../../app/store/models/user.model';
import {UserState} from '../../app/user.state';
import {AddUser, DeleteUser, GetUsers, SetSelectedUser} from '../../app/store/actions/user.action';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  reservations = [];
  reservationsList = [];
  toggled = false;
  agence = 'Choisir un institut';
  id='';
  categories = [];
  imageUrl="https://dev.saunya.com/public/";
  checktype:string='cours';
  fullCheckinList:any=null;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @Select(UserState.getUserList) users!: Observable<User[]>;
  item:any=null;
  homeImage=[];


  constructor(
    private store: Store,
    private router: Router,
    private events: EventsService,
    private app: AppService
    ) {

  }
  async  ngOnInit() {
    this.homeImage =this.app.getHomeImage();
    this.store.dispatch(new GetUsers());
   await this.users.subscribe(res => {
      //this.item = res[0];
      this.item = res[res.length-1];
    });
    this.categorieService();
   this.getSession();
  }


  async getSession(){



    await Storage.get({ key: 'agence' }).then(res => {
      this.agence = res.value;
    });
    this.events.getObservable().subscribe((data) => {
      this.agence =  data.agence;
    })

  }


   categorieService(){

     this.app.fetchCategoriesAll().subscribe(res => {

      this.categories = _.filter(
        res['data'], (o) => {
          return o.is_service == 1;
        });



      this.fullCheckinList = this.categories;


      },err=>{

      });
    }

  toggleSearchbar() {
    this.toggled = true;
  }

  toggleCancel(){
    this.toggled = false;
  }

  onInput(ev: any){
    let val = ev.target.value;

    if (val && val.trim() != '' && this.categories!=null) {

      this.categories= this.categories.filter((item) => {
        return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1));

      })
    }
    if (val==='' && this.categories!=null){ this.categories =this.fullCheckinList;}

  }

  onCancel(ev: any){
    this.toggled = false;
  }


  loadData(event) {
    setTimeout(() => {

      event.target.complete();

      if (this.categories.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  goReservation(categorie:any){


      this.router.navigate(['/tabs/reservation/subcatreserver1/'+categorie.id])

  }


}
