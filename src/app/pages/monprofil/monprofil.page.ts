import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

import {User} from '../../../app/store/models/user.model';
import {UserState} from '../../../app/user.state';
import {AddUser, DeleteUser, GetUsers, SetSelectedUser} from '../../../app/store/actions/user.action';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-monprofil',
  templateUrl: './monprofil.page.html',
  styleUrls: ['./monprofil.page.scss'],
})
export class MonprofilPage implements OnInit {
  @Select(UserState.getUserList) users!: Observable<User[]>;
  item: any;
  constructor(private authService: AuthService, private store: Store, private route: Router) { }

  async ngOnInit() {
    this.store.dispatch(new GetUsers());
    await this.users.subscribe(res => {

      this.item = res[res.length-1];

    });
  }

  btnModProfil(){
    this.route.navigateByUrl('/tabs/profil/modifierprofil', { replaceUrl: true });

  }

  carnetadresse(){
    this.route.navigateByUrl('/tabs/profil/carnetadresse', { replaceUrl: true });
  }

  btnModPwd(){

    this.route.navigateByUrl('/tabs/profil/modifiermodpasse', { replaceUrl: true });

  }


  contact(){

    this.route.navigateByUrl('/tabs/profil/contact', { replaceUrl: true });

  }

  sortir(){
      Storage.clear();
      const user: User = {
        id: 0,
        name: '',
        type: '',
        email:'',
        avatar:'',
        avatar_original: '',
        address: '',
        city: '',
        country:'',
        postal_code: '',
        phone: ''

     };
      this.store.dispatch(new AddUser(user));
      this.authService.logout();
      this.route.navigateByUrl('bienvenue', { replaceUrl: true });

  }

  btnAide(){

    this.route.navigateByUrl('/tabs/profil/assistance', { replaceUrl: true });

  }
  btnReservation(){

    this.route.navigateByUrl('/tabs/profil/myappointment', { replaceUrl: true });
  }

  btnWallet(){
    this.route.navigateByUrl('/tabs/profil/mywallet', { replaceUrl: true });
  }


}
