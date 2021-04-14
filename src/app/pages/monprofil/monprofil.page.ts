import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import { AlertController } from '@ionic/angular';
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
  isVerifyPhone:string='';
  constructor(public alertController: AlertController,private authService: AuthService, private store: Store, private route: Router) {

    this.isVerify().then(res=>{
      this.isVerifyPhone =res.value;
    })

  }

  async ngOnInit() {
    this.store.dispatch(new GetUsers());
    await this.users.subscribe(res => {

      this.item = res[res.length-1];

    });
  }

  btnModProfil(){
    if (this.isVerifyPhone!='true'){
      this.messageEnreg("Merci de confirmer votre numéro de téléphone");
      return;
    }
    this.route.navigateByUrl('/tabs/profil/modifierprofil', { replaceUrl: true });

  }

  async isVerify(){

    return await Storage.get({ key: 'verifyphone' })

   }

  carnetadresse(){
    if (this.isVerifyPhone!='true'){
      this.messageEnreg("Merci de confirmer votre numéro de téléphone");
      return;
    }
    this.route.navigateByUrl('/tabs/profil/carnetadresse', { replaceUrl: true });
  }

  btnModPwd(){
    if (this.isVerifyPhone!='true'){
      this.messageEnreg("Merci de confirmer votre numéro de téléphone");
      return;
    }
    this.route.navigateByUrl('/tabs/profil/modifiermodpasse', { replaceUrl: true });

  }


  btnConfPhone(){
    this.route.navigateByUrl('/tabs/profil/country', { replaceUrl: true });
  }


  contact(){
    if (this.isVerifyPhone!='true'){
      this.messageEnreg("Merci de confirmer votre numéro de téléphone");
      return;
    }
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
    if (this.isVerifyPhone!='true'){
      this.messageEnreg("Merci de confirmer votre numéro de téléphone");
      return;
    }
    this.route.navigateByUrl('/tabs/profil/assistance', { replaceUrl: true });

  }
  btnReservation(){
    if (this.isVerifyPhone!='true'){
      this.messageEnreg("Merci de confirmer votre numéro de téléphone");
      return;
    }
    
    this.route.navigateByUrl('/tabs/profil/myappointment', { replaceUrl: true });
  }

  btnWallet(){
    if (this.isVerifyPhone!='true'){
      this.messageEnreg("Merci de confirmer votre numéro de téléphone");
      return;
    }
    this.route.navigateByUrl('/tabs/profil/mywallet', { replaceUrl: true });
  }


  async messageEnreg(msg: string){

    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
     
  }


}
